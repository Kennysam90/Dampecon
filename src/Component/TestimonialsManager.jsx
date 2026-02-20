import React, { useState, useEffect } from "react";
import { useComments } from "../hooks/useComments";

const TestimonialsManager = () => {
  const { data: testimonials = [], addComment, updateComment, isLoading } = useComments();
  
  // Track screen width for responsiveness
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 850;

  const [input, setInput] = useState({
    id: null,
    firstName: "",
    lastName: "",
    occupation: "",
    companyName: "",
    profileImage: null, 
    comment: "",
    project: "694c55550ce0385b799c2b97" 
  });

  const [isEditing, setIsEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSave = () => {
    if (!input.firstName || !input.comment) {
      alert("Please fill in your name and comment.");
      return;
    }

    const formData = new FormData();
    formData.append("firstName", input.firstName);
    formData.append("lastName", input.lastName);
    formData.append("occupation", input.occupation);
    formData.append("companyName", input.companyName);
    formData.append("comment", input.comment);
    formData.append("project", input.project);

    if (input.profileImage instanceof File) {
      formData.append("profileImage", input.profileImage);
    }

    if (isEditing) {
      updateComment({ id: input.id, data: formData });
    } else {
      addComment(formData);
    }

    setSubmitted(true);
    resetForm();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const resetForm = () => {
    setInput({
      id: null, firstName: "", lastName: "", occupation: "",
      companyName: "", profileImage: null, comment: "",
      project: "694c55550ce0385b799c2b97"
    });
    setIsEditing(false);
  };

  if (isLoading) return <div style={{padding: "40px", textAlign: "center"}}>Loading...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={{...styles.mainTitle, fontSize: isMobile ? "28px" : "36px"}}>
          Share your thoughts about Dampecon Ltd.
        </h1>
        <p style={styles.subtitle}>
          Help us share your experience and feedback about Dampecon Ltd. to help us improve.
        </p>
      </div>

      <div style={{
        ...styles.page, 
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "20px" : "40px"
      }}>
        
        {/* LEFT SIDE: FORM */}
        <div style={{
          ...styles.leftColumn, 
          maxWidth: isMobile ? "100%" : "400px"
        }}>
          <div style={styles.card}>
            
            {submitted && (
              <div style={styles.successMessage}>
                <strong>Thank you!</strong> Your testimonial has been submitted successfully. ✅
              </div>
            )}

            <div style={styles.form}>
              <input 
                style={styles.input} 
                placeholder="First Name" 
                value={input.firstName} 
                onChange={(e) => setInput({ ...input, firstName: e.target.value })} 
              />
              <input 
                style={styles.input} 
                placeholder="Last Name" 
                value={input.lastName} 
                onChange={(e) => setInput({ ...input, lastName: e.target.value })} 
              />
              <input 
                style={styles.input} 
                placeholder="Occupation" 
                value={input.occupation} 
                onChange={(e) => setInput({ ...input, occupation: e.target.value })} 
              />
              <input 
                style={styles.input} 
                placeholder="Company Name" 
                value={input.companyName} 
                onChange={(e) => setInput({ ...input, companyName: e.target.value })} 
              />
              <textarea 
                style={{ ...styles.input, height: "100px" }} 
                placeholder="Share your experience..." 
                value={input.comment} 
                onChange={(e) => setInput({ ...input, comment: e.target.value })} 
              />
              
              <label style={{ fontSize: '12px', color: '#666' }}>Upload Profile Picture:</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => setInput({ ...input, profileImage: e.target.files[0] })} 
              />

              <button style={styles.button} onClick={handleSave}>
                {isEditing ? "Update Changes" : "Submit Testimonial"}
              </button>
              
              {isEditing && (
                <button style={{ ...styles.button, backgroundColor: "#666" }} onClick={resetForm}>
                  Cancel Edit
                </button>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: SCROLLABLE LIST */}
        <div style={{
          ...styles.rightColumn,
          maxHeight: isMobile ? "500px" : "750px"
        }}>
          <h3 style={{ marginBottom: "20px" }}>Latest Feedback ({testimonials.length})</h3>
          <div style={styles.scrollArea}>
            {testimonials.map((t) => (
              <div key={t.id || t._id} style={styles.listItem}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img 
                      src={t.profileImage ? `https://api.dampecon.com${t.profileImage}` : "https://via.placeholder.com/40"} 
                      alt="" 
                      style={styles.avatar} 
                      onError={(e) => { e.target.src = "https://via.placeholder.com/40"; }}
                    />
                    <div>
                      <strong style={{ display: "block" }}>{t.firstName} {t.lastName}</strong>
                      <span style={{ fontSize: "12px", color: "#666" }}>
                        {t.occupation} {t.companyName ? `@ ${t.companyName}` : ""}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: "14px", marginTop: "12px", lineHeight: "1.5", color: "#444" }}>
                    "{t.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: { maxWidth: "1200px", margin: "0 auto", padding: "20px" },
    headerSection: { textAlign: "center", marginBottom: "30px" },
    mainTitle: { fontWeight: "800", color: "#111", marginBottom: "10px" },
    subtitle: { fontSize: "16px", color: "#666" },
    page: { display: "flex", fontFamily: "sans-serif" },
    leftColumn: { flex: "1" },
    rightColumn: { 
      flex: "1.5", 
      display: "flex", 
      flexDirection: "column",
      background: "#fff",
      borderRadius: "12px",
      padding: "20px",
      border: "1px solid #ddd",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    },
    scrollArea: { overflowY: "auto", paddingRight: "10px", flex: 1 },
    card: { background: "#fff", padding: "25px", width:"100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #eee" },
    formTitle: { marginBottom: "20px", fontSize: "22px", fontWeight: "700" },
    form: { display: "flex", flexDirection: "column", gap: "12px" },
    input: { padding: "12px", borderRadius: "8px", border: "1px solid #ddd", outline: "none", fontSize: "14px" },
    button: { padding: "14px", borderRadius: "8px", border: "none", backgroundColor: "#000", color: "#fff", fontWeight: "600", cursor: "pointer", marginTop: "10px" },
    listItem: { display: "flex", alignItems: "flex-start", background: "#f9f9f9", padding: "15px", borderRadius: "12px", marginBottom: "12px", border: "1px solid #eee" },
    avatar: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
    successMessage: { backgroundColor: "#d4edda", color: "#155724", padding: "12px", borderRadius: "8px", marginBottom: "15px", fontSize: "14px", border: "1px solid #c3e6cb" }
};

export default TestimonialsManager;