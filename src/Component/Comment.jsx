import React, { useState } from "react";
import { useComments } from "../hooks/useComments";

const Comment = () => {
  // Pulling data from your React Query hook
  const { data: testimonials = [], isLoading, isError } = useComments();

  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(testimonials.length);
  };

  const displayedTestimonials = testimonials.slice(0, visibleCount);

  if (isLoading) {
    return (
      <div style={{ padding: "100px 0", textAlign: "center" }}>
        <p className="txt txt--l">Loading testimonials...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ padding: "100px 0", textAlign: "center" }}>
        <p className="txt txt--l" style={{ color: "red" }}>Failed to load client feedback.</p>
      </div>
    );
  }

  return (
    <section
      className="testimonials_section pb-200 pb-100-mob bg--white"
      style={{ marginBottom: "-4em", marginTop: "4em" }}
    >
      <div className="container">
        <div className="flex v--end h--between heading_wrap flex--block-mob">
          <div className="left">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
              what our clients say
            </div>
            <div className="title title--xl mt-16 color--dark mw1040 isview textslide trd02">
              <h2>
                <span>Engineering solutions built to perform </span>
                <br />
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-40 mt-12-mob testimonials_wrap grid col-3 col-2-tablet col-1-mob gap-12">
          {displayedTestimonials.map((item) => (
            <div
              key={item.id}
              className="col radius-12 bg--gray flex fd--column isview slidetop"
            >
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  /* Checking for both camelCase and snake_case to be safe */
                  alt={`Image - ${item.firstName || item.first_name}`}
                  className="md"
                  loading="lazy"
                  src={
                    item.profileImage 
                      ? `https://api.dampecon.com${item.profileImage}` 
                      : item.image 
                        ? `https://api.dampecon.com${item.image}` 
                        : "https://via.placeholder.com/60"
                  }
                  onError={(e) => {
                    // This prevents an infinite loop if the placeholder also fails
                    if (e.target.src !== "https://via.placeholder.com/60") {
                      e.target.src = "https://via.placeholder.com/60";
                    }
                  }}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div className="bio">
                  <div className="txt txt--m gap-0">
                    <p>
                      {item.firstName || item.first_name} {item.lastName || item.last_name}
                    </p>
                    <span>
                      {item.occupation || item.role} at {item.companyName || item.company}
                    </span>
                  </div>
                </div>
              </div>

              <div className="txt txt--l mt-auto pt-24 text_wrap">
                <p>{item.comment || item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {testimonials.length > visibleCount && (
          <div className="flex h--center mt-40" style={{ justifyContent: 'center', display: 'flex' }}>
            <button
              onClick={showMore}
              className="btn"
              style={{
                padding: "15px 40px",
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "600",
                border: "none",
                fontSize: "16px"
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Comment;