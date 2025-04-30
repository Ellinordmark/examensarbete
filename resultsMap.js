document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([60.4858, 15.4371], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const marker = L.marker([60.503042, 15.391417]).addTo(map);
  marker
    .bindPopup(
      `<p class="map-text poppins-regular" > <span style="line-height: 2.5rem; font-size: 16px;" class="poppins-semibold">Facility 1 </span><br/>(DD) 60.503042, 15.391417<br/> Serving 35% of customers</p>`
    )
    .openPopup()
    ._icon.classList.add("huechange");

  const circle = L.circle([60.503042, 15.391417], {
    color: "#5084F3",
    fillColor: "#C4D7FF",
    fillOpacity: 0.5,
    radius: 1000,
  }).addTo(map);

  const marker2 = L.marker([60.484914, 15.445785]).addTo(map);
  marker2
    .bindPopup(
      `<p class="map-text poppins-regular" ><span style="line-height: 2.5rem; font-size: 16px;" class="poppins-semibold">Facility 2</span> <br/>(DD) 60.484914, 15.445785 <br/> Serving 65% of customers</p>`
    )
    .openPopup()
    ._icon.classList.add("huechange");

  const circle2 = L.circle([60.484914, 15.445785], {
    color: "#5084F3",
    fillColor: "#C4D7FF",
    fillOpacity: 0.5,
    radius: 1000,
  }).addTo(map);

  const coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});

function exportResults() {
  // Sample data: 2D array (rows and columns)
  const header = ["Allocated facilities", " ", " "];
  const rows = [
    ["Facility 1:", 60.503042, 15.391417],
    ["Facility 2:", 60.484914, 15.445785],
  ];
  const data = [header, ...rows];

  // Convert array to CSV string
  const csvContent = data.map((row) => row.join(",")).join("\n");

  // Create a Blob from the CSV
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  // Create a temporary link to trigger download
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "export.csv");
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
