import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";


// ... your styles remain the same

const ProjectsTable = () => {
    const [deletingId, setDeletingId] = useState(null);
    const [deleteStatus, setDeleteStatus] = useState(null); // "success" | "error"

  const [form, setForm] = useState({
    
  title: "",
    description: "",
    file: null,        // single file for image/video
    isVideo: false,    // checkbox determines type
    clientName: "",
    coverImage: null,
    timeLine: "",
    state: "",
    category: [],
    categoryInput: "",
    result: [],
    resultInput: "",
});

const [editingId, setEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState(null);

  /* ---------------- STYLES ---------------- */
const container = {
  background: "#f9f9f9",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  maxWidth: "1000px",
  margin: "auto",
  fontFamily: "Arial, sans-serif",
};

const borderedScrollBox = {
  display: "flex",
  gap: "6px",
  padding: "6px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  overflowX: "auto",
  whiteSpace: "nowrap",
  maxWidth: "220px",
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
  alignItems: "flex-start",
};

const input = {
  padding: "10px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  flex: "1 1 200px",
  fontSize: "14px",
};

const fileInput = { flex: "0 0 120px" };

const button = {
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500",
};

const tableWrapper = { overflowX: "auto" };

const table = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "900px",
};

const th = {
  borderBottom: "2px solid #ddd",
  padding: "12px",
  backgroundColor: "#f4f4f4",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

const imgStyle = {
  width: "60px",
  height: "60px",
  objectFit: "cover",
};

const tagStyle = {
  background: "#007BFF",
  color: "#fff",
  padding: "3px 8px",
  borderRadius: "4px",
  fontSize: "12px",
};
/* ---------------------------------------- */

const truncateText = {
  maxWidth: "180px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const descriptionText = {
  maxWidth: "220px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const tagsContainer = {
  display: "flex",
  gap: "6px",
  overflowX: "auto",
  paddingBottom: "4px",
  maxWidth: "220px",
};

const tagItem = {
  ...tagStyle,
  whiteSpace: "nowrap",
  flex: "0 0 auto",
  border: "1px solid rgba(0,0,0,0.1)",
};

const resultTag = {
  ...tagStyle,
  background: "#28a745",
  whiteSpace: "nowrap",
  flex: "0 0 auto",
  border: "1px solid rgba(0,0,0,0.1)",
};

const spinnerStyle = {
  width: "16px",
  height: "16px",
  border: "2px solid #ccc",
  borderTop: "2px solid #dc3545",
  borderRadius: "50%",
  animation: "spin 0.6s linear infinite",
};
<style>
{`
@keyframes spin {
  to { transform: rotate(360deg); }
}
`}
</style>





  // --- Fetch existing projects ---
  const { data: projects = [], refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("https://api.dampecon.com/api/projects");
      return res.data; // Make sure your API returns an array of projects
    },
  });

  // --- Mutation to add new project ---
  const mutation = useMutation({
  mutationFn: async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("clientName", data.clientName);
    formData.append("timeLine", data.timeLine);
    formData.append("state", data.state);
    formData.append("isVideo", data.isVideo ? "true" : "false"); // string
    data.category.forEach((c) => formData.append("category[]", c));
    data.result.forEach((r) => formData.append("result[]", r));
    if (data.coverImage) formData.append("coverImage", data.coverImage); // single file

    const res = await axios.post(
      "https://api.dampecon.com/api/projects",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return res.data;
  },
  onSuccess: () => {
    refetch();
    setForm({
      title: "",
      description: "",
      coverImage: null,
      isVideo: false,
      clientName: "",
      timeLine: "",
      state: "",
      category: [],
      categoryInput: "",
      result: [],
      resultInput: "",
    });
  },
  onError: (err) => console.error("Failed to add project:", err.response?.data || err),
});

const deleteMutation = useMutation({
  mutationFn: async (id) => {
    setDeletingId(id);
    setDeleteStatus(null);

    const res = await axios.delete(
      `https://api.dampecon.com/api/projects/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  },
  onSuccess: () => {
    setDeleteStatus("success");
    setDeletingId(null);
    refetch();
  },
  onError: () => {
    setDeleteStatus("error");
    setDeletingId(null);
  },
});

const editMutation = useMutation({
  mutationFn: async ({ id, data }) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("clientName", data.clientName);
    formData.append("timeLine", data.timeLine);
    formData.append("state", data.state);
    formData.append("isVideo", data.isVideo ? "true" : "false");

    data.category.forEach((c) => formData.append("category[]", c));
    data.result.forEach((r) => formData.append("result[]", r));

    if (data.coverImage) {
      formData.append("coverImage", data.coverImage);
    }

    const res = await axios.put(
      `https://api.dampecon.com/api/projects/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data;
  },
  onSuccess: () => {
    setEditStatus("success");
    setEditingId(null);
    refetch();
  },
  onError: () => {
    setEditStatus("error");
  },
});

const handleDelete = (id) => {
  if (!window.confirm("Are you sure you want to delete this project?")) return;
  deleteMutation.mutate(id);
};



  const handleSubmit = () => {
  if (editingId) {
    editMutation.mutate({ id: editingId, data: form });
  } else {
    mutation.mutate(form);
  }
};


  return (
    <div style={container}>
      <div style={title}>Projects Management</div>

      {/* FORM */}
      <div style={formRow}>
        {/* same form inputs as before */}
        <input type="text" placeholder="Project Title" style={input} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input type="text" placeholder="Company Name" style={input} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input type="text" placeholder="Client Name" style={input} value={form.clientName} onChange={(e) => setForm({ ...form, clientName: e.target.value })} />
        <input type="text" placeholder="Timeline" style={input} value={form.timeLine} onChange={(e) => setForm({ ...form, timeLine: e.target.value })} />
        <input type="text" placeholder="State" style={input} value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
            type="checkbox"
            checked={form.isVideo}
            onChange={(e) => setForm({ ...form, isVideo: e.target.checked })}
        />
        This is a video
        </label>

        <input
        type="file"
        accept={form.isVideo ? "video/*" : "image/*"}
        style={fileInput}
        onChange={(e) => setForm({ ...form, coverImage: e.target.files[0] })}
        />




       <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1 1 200px" }}>
        <input
            type="text"
            placeholder="Add category"
            style={{padding:"10px", borderRadius:"6px", border:"1px solid #ccc", fontSize:"14px"}}
            value={form.categoryInput}
            onChange={(e) => setForm({ ...form, categoryInput: e.target.value })}
            onKeyDown={(e) => {
            if (e.key === "Enter" && form.categoryInput.trim()) {
                e.preventDefault();
                setForm({
                ...form,
                category: [...form.category, form.categoryInput.trim()],
                categoryInput: "",
                });
            }
            }}
        />

        {/* CATEGORY PREVIEW */}
        {form.category.length > 0 && (
            <div style={borderedScrollBox}>
            {form.category.map((c, idx) => (
                <span key={idx} style={{ ...tagItem, display: "flex", alignItems: "center", gap: "4px" }}>
                {c}
                <span
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={() =>
                    setForm({
                        ...form,
                        category: form.category.filter((_, i) => i !== idx),
                    })
                    }
                >
                    ×
                </span>
                </span>
            ))}
            </div>
        )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1 1 200px" }}>
        <input
            type="text"
            placeholder="Add result"
            style={{padding:"10px", borderRadius:"6px", border:"1px solid #ccc", fontSize:"14px"}}
            value={form.resultInput}
            onChange={(e) => setForm({ ...form, resultInput: e.target.value })}
            onKeyDown={(e) => {
            if (e.key === "Enter" && form.resultInput.trim()) {
                e.preventDefault();
                setForm({
                ...form,
                result: [...form.result, form.resultInput.trim()],
                resultInput: "",
                });
            }
            }}
        />

        {/* RESULT PREVIEW */}
        {form.result.length > 0 && (
            <div style={borderedScrollBox}>
            {form.result.map((r, idx) => (
                <span key={idx} style={{ ...resultTag, display: "flex", alignItems: "center", gap: "4px" }}>
                {r}
                <span
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={() =>
                    setForm({
                        ...form,
                        result: form.result.filter((_, i) => i !== idx),
                    })
                    }
                >
                    ×
                </span>
                </span>
            ))}
            </div>
        )}
        </div>
        <button
        style={button}
        onClick={handleSubmit}
        disabled={mutation.isLoading || editMutation.isLoading}
        >
        {editMutation.isLoading
            ? "Updating..."
            : editingId
            ? "Update Project"
            : mutation.isLoading
            ? "Adding..."
            : "Add Project"}
        </button>

      </div>
{deleteStatus === "success" && (
  <div style={{ color: "green", marginBottom: "12px", fontWeight: 500 }}>
    Project deleted successfully
  </div>
)}

{deleteStatus === "error" && (
  <div style={{ color: "red", marginBottom: "12px", fontWeight: 500 }}>
    Failed to delete project
  </div>
)}

{editStatus === "success" && (
  <div style={{ color: "green", marginBottom: "12px", fontWeight: 500 }}>
    Project updated successfully
  </div>
)}

{editStatus === "error" && (
  <div style={{ color: "red", marginBottom: "12px", fontWeight: 500 }}>
    Failed to update project
  </div>
)}


      {/* TABLE */}
      <div style={tableWrapper}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Title</th>
              <th style={th}>Description</th>
              <th style={th}>Image/Video</th>
              <th style={th}>Client</th>
              <th style={th}>Timeline</th>
              <th style={th}>State</th>
              <th style={th}>Categories</th>
              <th style={th}>Results</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center", padding: "20px", color: "#777" }}>No projects yet</td>
              </tr>
            ) : (
              projects.map((p, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fdfdfd" }}>
                  <td style={{ ...td, ...truncateText }} title={p.title}>
                    {p.title}
                    </td>
                    <td style={{ ...td, ...descriptionText }} title={p.description}>
                    {p.description}
                    </td>

                  <td style={{ ...td, textAlign: "center" }}>
                    {p.isVideo  ? (
                        <video
                        src={`https://api.dampecon.com${p.coverImage}`}
                        controls
                        style={{ width: "120px", height: "80px", borderRadius: "12px" }}
                        />
                    ) : p.coverImage ? (
                        <img
                        src={`https://api.dampecon.com${p.coverImage}`}
                        alt=""
                        style={imgStyle}
                        />
                    ) : null}
                    </td>


                 <td style={{ ...td, ...truncateText }} title={p.clientName}>
                    {p.clientName}
                 </td>

                  <td style={{ ...td, ...truncateText }} >{p.timeLine}</td>
                  <td style={td}>{p.state}</td>
                 <td style={td}>
                <div style={borderedScrollBox}>
                    {p.category?.map((c, idx) => (
                    <span key={idx} style={tagItem}>
                        {c}
                    </span>
                    ))}
                </div>
                </td>
                 <td style={td}>
                <div style={borderedScrollBox}>
                    {p.result?.map((r, idx) => (
                    <span key={idx} style={resultTag}>
                        {r}
                    </span>
                    ))}
                </div>
                </td>
                <td style={{ ...td, textAlign: "center" }}>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    
                    <FaEdit
                        style={{ cursor: "pointer", color: "#007BFF" }}
                        title="Edit project"
                        onClick={() => {
                            setEditingId(p._id);
                            setEditStatus(null);

                            setForm({
                            title: p.title || "",
                            description: p.description || "",
                            clientName: p.clientName || "",
                            timeLine: p.timeLine || "",
                            state: p.state || "",
                            isVideo: p.isVideo || false,
                            coverImage: null, // IMPORTANT: don't preload file inputs
                            category: p.category || [],
                            categoryInput: "",
                            result: p.result || [],
                            resultInput: "",
                            });
                        }}
                    />
                    {/* DELETE ICON */}
                    {deletingId === p._id ? (
                    <div style={spinnerStyle} />
                    ) : (
                    <FaTrash
                        style={{ cursor: "pointer", color: "#dc3545" }}
                        title="Delete project"
                        onClick={() => handleDelete(p._id)}
                    />
                    )}

                    
                </div>
                </td>

                </tr>
              ))
            )}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
