import { useMemo } from "react";
import { useTeam } from "../hooks/UseTeams"; // your hook

const LeadershipTeam = () => {
  const { data: team = [], isLoading, isError } = useTeam();

  const imageSrc = (path) => {
    if (!path) return "";
    if (/^https?:\/\//i.test(path)) return path;
    return `https://api.dampecon.com${path.startsWith("/") ? "" : "/"}${path}`;
  };

  // Convert API team members to your UI format
  const members = useMemo(() => {
    return (team || []).map((m) => {
      const fullName = String(m?.name || "").trim();
      const parts = fullName.split(/\s+/);
      const first_name = parts[0] || "";
      const last_name = parts.slice(1).join(" ") || "";

      return {
        id: m._id, // important: use backend id
        first_name,
        last_name,
        occupation: m.role || "",
        email: m.email || "",
        image: m.photo || "", // backend uses `photo`
        alt: `Photo of ${fullName || "team member"}`,
        aspectRatio: "0.84210526315789", // keep your existing value or remove style
        description: m.bio || "",
        socials: m.socials || {},
      };
    });
  }, [team]);

  return (
    <div className="container">
      <div className="title title--xl isview textslide visible">
        Our leadership <span>team</span>
      </div>

      {/* optional status text (no CSS changes) */}
      {isLoading && <div style={{ marginTop: 10 }}>Loading...</div>}
      {isError && <div style={{ marginTop: 10 }}>Failed to load team</div>}

      <div className="team-flex-wrap grid col-3 col-1-mob gap-20-mob gap-40 mt-64 mt-40-mob">
        {members.map((member) => (
          <div
            key={member.id}
            className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar"
            data-card={member.id}
          >
            <div className="mask bg--dark" />

            <div className="top">
              <div className="img-wrap">
                <img
                  className=""
                  src={imageSrc(member.image)}
                  alt={member.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: member.aspectRatio }}
                />
              </div>

              <div className="bio mt-24">
                <div className="bio-name color--dark">
                  {member.first_name} {member.last_name}
                </div>

                <div className="bio-position color--dark-secondary">
                  {member.occupation}
                </div>

                {/* Email (clickable, CSS unchanged) */}
                <a
                  href={`mailto:${member.email}`}
                  className="bio-position color--dark-secondary"
                >
                  {member.email}
                </a>
              </div>
            </div>

            <div className="txt txt--m color--white description pt-20 pt-8-mob">
              {member.description}
            </div>

            <span
              className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
              data-text-primary="Read more"
              data-text-secondary="Read less"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
