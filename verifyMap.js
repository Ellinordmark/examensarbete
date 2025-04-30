document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([60.4858, 15.4371], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // const marker = L.marker([60.503042, 15.391417]).addTo(map);
  // marker.bindPopup(`<p class="map-text poppins-regular" > <span class="poppins-semibold">Facility 1 </span><br/>(DD) 60.503042, 15.391417</p>`).openPopup();

  // const circle = L.circle([60.503042, 15.391417], {
  //   color: "blue",
  //   fillColor: "#add8e6",
  //   fillOpacity: 0.5,
  //   radius: 1000,
  // }).addTo(map);

  // const marker2 = L.marker([60.484914, 15.445785]).addTo(map);
  // marker2.bindPopup(`<p class="map-text poppins-regular" ><span class="poppins-semibold">Facility 2</span> <br/>(DD) 60.484914, 15.445785</p>`).openPopup();

  // const circle2 = L.circle([60.484914, 15.445785], {
  //   color: "blue",
  //   fillColor: "#add8e6",
  //   fillOpacity: 0.5,
  //   radius: 1000,
  // }).addTo(map);
});
