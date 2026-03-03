import { useState } from "react";
import ProjectsTable from "../Component/ProjectsTable";
import TeamsTable from "../Component/TeamsTable";
import TestimonialsList from "../Component/TestimonialsList";
import { useComments } from "../hooks/useComments"; // 1. Import the hook

const Admin = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formError, setFormError] = useState("");
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  // 2. Fetch the data here at the parent level
  const { data: testimonials = [], deleteComment } = useComments();

  // 3. Create a placeholder for edit (or link to your edit logic)
  const handleEditClick = (t) => {
    console.log("Edit requested for:", t);
    // If you want to open an edit form, you'd handle that logic here
  };

  const btn = (active) => ({
    padding: "10px 20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: active ? "#111" : "#fff",
    color: active ? "#fff" : "#111",
    cursor: "pointer",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // Client-side only. Replace with real auth when available.
    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "admin123";

    if (
      formValues.username.trim() === ADMIN_USERNAME &&
      formValues.password === ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true);
      setFormValues({ username: "", password: "" });
      return;
    }

    setFormError("Invalid username or password.");
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-page">
        <div className="admin-login-wrap">
          <img
            src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/Logo.png"
            alt="Project logo"
            className="admin-logo"
          />
          <form onSubmit={handleLoginSubmit} className="admin-login-card">
            <div className="admin-login-header">
              <div className="admin-login-title">Admin Login</div>
              <div className="admin-login-subtitle">
                Enter your credentials to continue.
              </div>
            </div>

            <div className="admin-field">
              <label className="admin-label">
              Username
              </label>
              <input
                type="text"
                value={formValues.username}
                onChange={(e) =>
                  setFormValues((v) => ({ ...v, username: e.target.value }))
                }
                className="admin-input"
                placeholder="username"
                autoComplete="username"
                required
              />
            </div>

            <div className="admin-field">
              <label className="admin-label">
              Password
              </label>
              <input
                type="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues((v) => ({ ...v, password: e.target.value }))
                }
                className="admin-input"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>

            {formError && <div className="admin-error">{formError}</div>}

            <button type="submit" className="admin-submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ padding: 24, background: "#f4f4f4", minHeight: "100vh" }}>
        <div style={{ justifyContent: "center", textAlign: "center", display: "flex", gap: 12, marginBottom: 20 }}>
          <button style={btn(activeTab === "projects")} onClick={() => setActiveTab("projects")}>
            Projects
          </button>
          <button style={btn(activeTab === "teams")} onClick={() => setActiveTab("teams")}>
            Teams
          </button>
          <button style={btn(activeTab === "comments")} onClick={() => setActiveTab("comments")}>
            Testimonials
          </button>
        </div>

        {activeTab === "projects" && <ProjectsTable />}
        {activeTab === "teams" && <TeamsTable />}
        
        {/* 4. Pass the props into the component! */}
        {activeTab === "comments" && (
          <TestimonialsList 
            testimonials={testimonials} 
            deleteComment={deleteComment}
            handleEditClick={handleEditClick}
          />
        )}
      </div>
    </>
  );
};

export default Admin;
