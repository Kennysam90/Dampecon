import React from 'react';

const TestimonialsList = ({ testimonials = [], handleEditClick, deleteComment }) => {
  return (
    <div style={styles.rightColumn}>
      <h3 style={{ marginBottom: "20px" }}>Latest Feedback ({testimonials.length})</h3>
      <div style={styles.scrollArea}>
        {testimonials.length === 0 && <p style={{textAlign: 'center', color: '#888'}}>No testimonials found.</p>}
        
        {testimonials.map((t) => (
          <div key={t._id || t.id} style={styles.listItem}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img 
                  src={
                    t.profileImage 
                      ? `https://api.dampecon.com${t.profileImage}` 
                      : "https://via.placeholder.com/40"
                  } 
                  alt="" 
                  style={styles.avatar} 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/40"; }}
                />
                <div>
                  <strong style={{ display: "block" }}>{t.firstName} {t.lastName}</strong>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", color: "#666" }}>
                        {t.occupation} @ {t.companyName}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: "14px", marginTop: "12px", lineHeight: "1.5", color: "#444" }}>
                "{t.comment}"
              </p>
            </div>

            <div style={styles.actionGroup}>
              <button 
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this testimonial?")) {
                    deleteComment(t._id || t.id);
                  }
                }} 
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ... keep styles the same ...
const styles = {
    rightColumn: { display: "flex", flexDirection: "column" },
    scrollArea: { overflowY: "auto", maxHeight: "70vh", paddingRight: "10px" },
    listItem: { 
      display: "flex", 
      alignItems: "flex-start", 
      background: "#fff", 
      padding: "20px", 
      borderRadius: "12px", 
      marginBottom: "15px", 
      border: "1px solid #eee",
      boxShadow: "0 2px 5px rgba(0,0,0,0.02)"
    },
    avatar: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
    actionGroup: { display: "flex", flexDirection: "column", gap: "8px", marginLeft: "15px" },
    editBtn: { padding: "6px 12px", borderRadius: "6px", border: "1px solid #007bff", color: "#007bff", background: "none", cursor: "pointer", fontSize: "12px", fontWeight: "600" },
    deleteBtn: { padding: "6px 12px", borderRadius: "6px", border: "none", color: "#dc3545", background: "#fee2e2", cursor: "pointer", fontSize: "12px", fontWeight: "600" },
  };

export default TestimonialsList;