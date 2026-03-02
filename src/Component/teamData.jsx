// teamData.js
const EMAIL_DOMAIN = "company.com";

const slugEmail = (name) =>
  String(name || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, ".");

export const TEAM_MEMBERS_WITH_EMAIL = [
  {
    id: 1,
    first_name: "Miss Hoglah",
    last_name: " Amos",
    occupation: "Legal Services",
    email: `${slugEmail("Hoglahamos@dampecon.com")}@${EMAIL_DOMAIN}`,
    image:
      "../../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/accountant.jpeg",
    alt: "Image - 332025-03-09 21.08.20",
    aspectRatio: "0.87820512820513",
    description:
      "An experienced manager who oversees Phenomenon customer relations and leads the team behind it, Polina also has deep expertise in design, having created numerous successful products in the past.",
  },
  {
    id: 2,
    first_name: "Engr. Dandale A.M,",
    last_name: " FNSE",
    occupation: "COREN Chairman",
    email: `${slugEmail("dandaleam@dampecon.com")}@${EMAIL_DOMAIN}`,
    image:
      "../../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/founderimg.jpeg",
    alt: "Image - 112025-03-09 20.19.59",
    aspectRatio: "0.84210526315789",
    description:
      "Manager with 8+ years of experience in e-commerce, product IT solutions, startups, and background in real estate investments.",
  },
];