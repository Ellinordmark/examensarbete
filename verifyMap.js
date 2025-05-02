document.addEventListener("DOMContentLoaded", () => {
  const userChoice = localStorage.getItem("hasExistingFacilities");
  const mapElement = document.getElementById("map");

  if (!userChoice || userChoice === "No") {
    mapElement.style.display = "none";
    return; // Don't initialize map
  }

  const map = L.map("map").setView([60.4858, 15.4371], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
});
