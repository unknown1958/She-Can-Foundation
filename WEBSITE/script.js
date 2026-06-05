// Smooth scroll from hero button to volunteer section
const joinBtn = document.getElementById("joinBtn");
const volunteerSection = document.getElementById("volunteer");

if (joinBtn && volunteerSection) {
  joinBtn.addEventListener("click", () => {
    volunteerSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Demo-only form submission handler
const volunteerForm = document.querySelector(".volunteer-form");

if (volunteerForm) {
  volunteerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your interest! This is a demo submission.");
    volunteerForm.reset();
  });
}