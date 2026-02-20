// import { useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";

// const TestimonialsTable = ({ testimonials, setTestimonials }) => {
//   const [editingId, setEditingId] = useState(null);
//   const [form, setForm] = useState({
//     first_name: "",
//     last_name: "",
//     role: "",
//     image: null,
//     content: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editingId !== null) {
//       setTestimonials((prev) =>
//         prev.map((t) =>
//           t.id === editingId
//             ? {
//                 ...form,
//                 id: editingId,
//                 image: form.image ? URL.createObjectURL(form.image) : t.image,
//               }
//             : t
//         )
//       );
//     } else {
//       const newTestimonial = {
//         ...form,
//         id: Date.now(),
//         image: form.image ? URL.createObjectURL(form.image) : "https://via.placeholder.com/60",
//       };
//       setTestimonials([...testimonials, newTestimonial]);
//     }

//     setForm({ first_name: "", last_name: "", role: "", image: null, content: "" });
//     setEditingId(null);
//   };

//   const handleDelete = (id) => {
//     if (!window.confirm("Are you sure you want to delete this testimonial?")) return;
//     setTestimonials(testimonials.filter((t) => t.id !== id));
//   };

//   return (
//     <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
//       <h2>Manage Testimonials</h2>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="First Name"
//           value={form.first_name}
//           onChange={(e) => setForm({ ...form, first_name: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={form.last_name}
//           onChange={(e) => setForm({ ...form, last_name: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Role / Company"
//           value={form.role}
//           onChange={(e) => setForm({ ...form, role: e.target.value })}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
//         />
//         <textarea
//           placeholder="Testimonial Content"
//           value={form.content}
//           onChange={(e) => setForm({ ...form, content: e.target.value })}
//           required
//           style={{ flex: "1 1 100%" }}
//         />
//         <button type="submit">
//           {editingId !== null ? "Update" : "Add"}
//         </button>
//       </form>

//       {/* Table preview */}
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th>Photo</th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Content</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {testimonials.map((t) => (
//             <tr key={t.id} style={{ borderBottom: "1px solid #ddd" }}>
//               <td>
//                 <img
//                   src={t.image}
//                   alt={`${t.first_name} ${t.last_name}`}
//                   style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
//                 />
//               </td>
//               <td>{t.first_name} {t.last_name}</td>
//               <td>{t.role}</td>
//               <td>{t.content}</td>
//               <td style={{ display: "flex", gap: "8px" }}>
//                 <FaEdit
//                   style={{ cursor: "pointer", color: "#007BFF" }}
//                   onClick={() => {
//                     setEditingId(t.id);
//                     setForm(t);
//                   }}
//                 />
//                 <FaTrash
//                   style={{ cursor: "pointer", color: "#dc3545" }}
//                   onClick={() => handleDelete(t.id)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

 export default TestimonialsTable;
