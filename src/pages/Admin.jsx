import { useState } from "react";
import ProjectsTable from "../Component/ProjectsTable";
import TeamsTable from "../Component/TeamsTable";
import TestimonialsList from "../Component/TestimonialsList";
import { useComments } from "../hooks/useComments"; // 1. Import the hook

const Admin = () => {
  const [activeTab, setActiveTab] = useState("projects");

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