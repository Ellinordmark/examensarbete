// document.addEventListener("DOMContentLoaded", () => {
//   const map = L.map("map").setView([60.4858, 15.4371], 13);

//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(map);

//   // const btnNo = document.querySelector('input [id="btn-choice4"]');

//   // if (document.querySelector('input[id="btn-choice9"]:checked')) {
//   //   console.log("BALBALBA", btnNo);
//   // }
//   const mapVisibility = document.getElementById("map");
//   const radioButtons = document.querySelectorAll('input[name="btn-choices4]');

//   radioButtons.forEach((button) => {
//     button.addEventListener("change", () => {
//       if (document.querySelector('input[id="btn-choice9"]:checked')) {
//         console.log("JAG FUNKAR");
//         // Show the file upload container if a radio button is selected
//         mapVisibility.style.display = "none";
//       } else {
//         mapVisibility.style.display = "block";
//       }
//     });
//   });

// const btnNo = document.getElementById("btn-choice9");

// if (btnNo && btnNo.checked) {
//   console.log("BALBALBA", btnNo);
// }
// });

document.addEventListener("DOMContentLoaded", () => {
  const userChoice = localStorage.getItem("hasExistingFacilities");
  const mapElement = document.getElementById("map");

  if (userChoice === "No") {
    mapElement.style.display = "none";
    return; // Don't initialize map
  }

  const map = L.map("map").setView([60.4858, 15.4371], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
});
