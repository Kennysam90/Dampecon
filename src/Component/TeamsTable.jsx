import { useEffect, useState } from "react";
import { useTeam } from "../hooks/UseTeams"; // adjust path

/* ---------------- STYLES ---------------- */
const container = {
  background: "#f9f9f9",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  maxWidth: "900px",
  margin: "auto",
  fontFamily: "Arial, sans-serif",
};

const title = {
  fontSize: "24px",
  fontWeight: "600",
  marginBottom: "20px",
  color: "#333",
};

const formRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  marginBottom: "25px",
  alignItems: "center",
};

const sectionLabel = {
  width: "100%",
  fontSize: "13px",
  fontWeight: "600",
  color: "#555",
  marginTop: "4px",
};

const input = {
  padding: "10px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  flex: "1 1 200px",
  fontSize: "14px",
};

const fileInput = {
  flex: "0 0 120px",
};

const button = {
  padding: "10px 20px",
  backgroundColor: "#28A745",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500",
  transition: "0.3s",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "left",
};

const th = {
  borderBottom: "2px solid #ddd",
  padding: "12px",
  backgroundColor: "#f4f4f4",
  color: "#333",
  fontWeight: "600",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee",
  verticalAlign: "middle",
};

const actionIcon = {
  cursor: "pointer",
  marginRight: "10px",
  padding: "6px",
  borderRadius: "8px",
  border: "1px solid #e6e6e6",
  background: "#fff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.2s",
};

const actionIconHover = {
  background: "#f5f5f5",
};

const iconSvg = {
  width: "18px",
  height: "18px",
  display: "block",
};

const imgStyle = {
  width: "60px",
  height: "60px",
  objectFit: "cover",
  borderRadius: "6px",
  border: "1px solid #ccc",
};
/* ---------------------------------------- */

const emptyForm = {
  name: "",
  role: "",
  bio: "",
  email: "",
  socials: {
    linkedin: "",
    twitter: "",
    github: "",
  },
  socialsText: "",

  // UI-only
  image: null,   // preview URL (your UI)
  _file: null,   // real file
  _id: null,     // backend id
};

const TeamsTable = () => {
  const { data, isLoading, isError, addTeam, updateTeam, deleteTeam } = useTeam();

  const [teams, setTeams] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editIndex, setEditIndex] = useState(null);

  const imageSrc = (path) => {
    if (!path) return "";
    if (/^https?:\/\//i.test(path)) return path;
    return `https://api.dampecon.com${path.startsWith("/") ? "" : "/"}${path}`;
  };

  useEffect(() => {
    if (Array.isArray(data)) setTeams(data);
  }, [data]);

  const handleAddOrEdit = () => {
    if (!form.name) return;

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("role", form.role);
    fd.append("bio", form.bio);
    fd.append("email", form.email);

    // send socials as JSON string (your controller can parse it)
    fd.append("socials", JSON.stringify(form.socials));

    // backend expects upload.single('photo')
    if (form._file) fd.append("photo", form._file);

    if (editIndex !== null) {
      const id = teams[editIndex]?._id || form._id;
      if (!id) return;

      updateTeam(
        { id, data: fd },
        {
          onSuccess: (updatedFromServer) => {
            const updated = [...teams];
            updated[editIndex] = updatedFromServer;
            setTeams(updated);

            setEditIndex(null);
            setForm(emptyForm);
          },
        }
      );
    } else {
      addTeam(fd, {
        onSuccess: (createdFromServer) => {
          setTeams((prev) => [createdFromServer, ...prev]);
          setForm(emptyForm);
        },
      });
    }
  };

  const deleteTeamRow = (i) => {
    const id = teams[i]?._id;
    if (!id) return;

    deleteTeam(id, {
      onSuccess: () => {
        setTeams((prev) => prev.filter((_, index) => index !== i));
      },
    });
  };

  return (
    <div style={container}>
      <div style={title}>Teams Management</div>

      {isLoading && <div style={{ marginBottom: 10 }}>Loading...</div>}
      {isError && <div style={{ marginBottom: 10, color: "red" }}>Failed to load team</div>}

      {/* FORM */}
      <div style={formRow}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          style={input}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Role"
          value={form.role}
          style={input}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />

        <input
          type="text"
          placeholder="Email"
          value={form.email}
          style={input}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Bio"
          value={form.bio}
          style={input}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
        />

        <div style={sectionLabel}>Social Medias</div>

        {/* <input
          type="text"
          placeholder=''
          value={form.socialsText}
          style={input}
          onChange={(e) => {
            const value = e.target.value;
            let nextSocials = form.socials;
            try {
              const parsed = JSON.parse(value);
              if (parsed && typeof parsed === "object") {
                nextSocials = parsed;
              }
            } catch {
              // Keep previous socials until JSON is valid
            }

            setForm({
              ...form,
              socialsText: value,
              socials: nextSocials,
            });
          }}
        /> */}

        <input
          type="file"
          accept="image/*"
          style={fileInput}
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;

            const preview = URL.createObjectURL(file);
            setForm({ ...form, image: preview, _file: file });
          }}
        />

        <button style={button} onClick={handleAddOrEdit}>
          {editIndex !== null ? "Update" : "Add Member"}
        </button>
      </div>

      {/* TABLE */}
      <table style={table}>
        <thead>
          <tr>
            <th style={th}>Name</th>
            <th style={th}>Role</th>
            <th style={th}>Email</th>
            <th style={th}>Image</th>
            <th style={th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((t, i) => (
            <tr key={t._id || i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fdfdfd" }}>
              <td style={td}>{t.name}</td>
              <td style={td}>{t.role}</td>
              <td style={td}>{t.email}</td>
              <td style={td}>
                {t.photo && <img src={imageSrc(t.photo)} alt="" style={imgStyle} />}
              </td>
              <td style={td}>
                <button
                  type="button"
                  style={actionIcon}
                  title="Edit"
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, actionIconHover)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, { background: "#fff" })
                  }
                  onClick={() => {
                    setEditIndex(i);

                    setForm({
                      name: t.name || "",
                      role: t.role || "",
                      bio: t.bio || "",
                      email: t.email || "",
                      socials: {
                        linkedin: t?.socials?.linkedin || "",
                        twitter: t?.socials?.twitter || "",
                        github: t?.socials?.github || "",
                      },
                      socialsText: JSON.stringify(
                        {
                          linkedin: t?.socials?.linkedin || "",
                          twitter: t?.socials?.twitter || "",
                          github: t?.socials?.github || "",
                        },
                        null,
                        0
                      ),
                      image: t.photo || null, // preview existing
                      _file: null,
                      _id: t._id || null,
                    });
                  }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={iconSvg}>
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  style={{ ...actionIcon, color: "#E53935" }}
                  title="Delete"
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, {
                      ...actionIconHover,
                      color: "#C62828",
                    })
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, {
                      background: "#fff",
                      color: "#E53935",
                    })
                  }
                  onClick={() => deleteTeamRow(i)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={iconSvg}>
                    <path
                      d="M6 7h12l-1 14H7L6 7zm4-3h4l1 1h5v2H4V5h5l1-1z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}

          {teams.length === 0 && !isLoading && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px", color: "#777" }}>
                No team members added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsTable;
