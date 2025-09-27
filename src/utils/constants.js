// Replace YOUR-BACKEND-URL with your actual backend vercel URL
export const BASE_URL =
  location.hostname === "localhost"
    ? "http://localhost:7777"
    : "https://devtinder-1xf2.onrender.com";
