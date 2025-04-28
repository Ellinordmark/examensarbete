// ---------------------------------- ANALYSE PAGE -------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const regions = [
    "Dalarna",
    "Norrbotten",
    "Västerbotten",
    "Västra Götaland",
    "Halland",
    "Värmland",
    "Örebro",
    "Kronoberg",
    "Skåne",
    "Jönköping",
    "Östergötland",
    "Södermanland",
    "Kalmar",
    "Uppsala",
    "Västernorrland",
    "Gotland",
    "Jämtland",
    "Gävleborg",
    "Blekinge",
    "Västmanland",
    "Stockholm",
  ];
  const cities = [
    "Örebro",
    "Kungsbacka",
    "Örnsköldsvik",
    "Kungälv",
    "Bollebygd",
    "Falkenberg",
    "Uppsala",
    "Ale",
    "Nyköping",
    "Linköping",
    "Klippan",
    "Knivsta",
    "Övertorneå",
    "Norrtälje",
    "Borgholm",
    "Norrköping",
    "Österåker",
    "Grums",
    "Ludvika",
    "Orsa",
    "Ängelholm",
    "Bromölla",
    "Sala",
    "Finspång",
    "Piteå",
    "Östhammar",
    "Söderhamn",
    "Falun",
    "Mönsterås",
    "Håbo",
    "Eksjö",
    "Lidköping",
    "Mark",
    "Ulricehamn",
    "Gagnef",
    "Karlstad",
    "Orust",
    "Forshaga",
    "Sotenäs",
    "Lycksele",
    "Ovanåker",
    "Mellerud",
    "Karlskrona",
    "Mora",
    "Trosa",
    "Mjölby",
    "Ekerö",
    "Vännäs",
    "Dorotea",
    "Gnosjö",
    "Lerum",
    "Umeå",
    "Hudiksvall",
    "Ockelbo",
    "Ronneby",
    "Oskarshamn",
    "Höganäs",
    "Växjö",
    "Ystad",
    "Värnamo",
    "Sundsvall",
    "Lindesberg",
    "Alvesta",
    "Hagfors",
    "Nässjö",
    "Munkfors",
    "Boden",
    "Söderköping",
    "Gotland",
    "Borlänge",
    "Gullspång",
    "Motala",
    "Mörbylånga",
    "Skellefteå",
    "Kumla",
    "Göteborg",
    "Gällivare",
    "Lysekil",
    "Höör",
    "Smedjebacken",
    "Krokom",
    "Lilla Edet",
    "Gävle",
    "Degerfors",
    "Borås",
    "Lessebo",
    "Västerås",
    "Landskrona",
    "Hässleholm",
    "Vansbro",
    "Nordanstig",
    "Jokkmokk",
    "Tranås",
    "Hällefors",
    "Sunne",
    "Bräcke",
    "Åre",
    "Tingsryd",
    "Rättvik",
    "Simrishamn",
    "Tierp",
    "Sölvesborg",
    "Alingsås",
    "Järfälla",
    "Karlskoga",
    "Svedala",
    "Vetlanda",
    "Östra Göinge",
    "Uddevalla",
    "Jönköping",
    "Avesta",
    "Filipstad",
    "Berg",
    "Härryda",
    "Båstad",
    "Tomelilla",
    "Katrineholm",
    "Askersund",
    "Karlsborg",
    "Ljusdal",
    "Eskilstuna",
    "Trelleborg",
    "Gislaved",
    "Kristianstad",
    "Sollefteå",
    "Töreboda",
    "Hofors",
    "Hultsfred",
    "Leksand",
    "Lekeberg",
    "Vellinge",
    "Vallentuna",
    "Härjedalen",
    "Malung",
    "Torsby",
    "Hylte",
    "Sandviken",
    "Helsingborg",
    "Södertälje",
    "Essunga",
    "Olofström",
    "Varberg",
    "Säter",
    "Åstorp",
    "Luleå",
    "Arvika",
    "Kävlinge",
    "Värmdö",
    "Aneby",
    "Kalmar",
    "Karlshamn",
    "Ödeshög",
    "Laholm",
    "Bollnäs",
    "Svalöv",
    "Pajala",
    "Älvdalen",
    "Huddinge",
    "Skurup",
    "Arvidsjaur",
    "Strömstad",
    "Eslöv",
    "Ånge",
    "Åsele",
    "Mariestad",
    "Tidaholm",
    "Sävsjö",
    "Götene",
    "Boxholm",
    "Stenungsund",
    "Tranemo",
    "Halmstad",
    "Sjöbo",
    "Bjuv",
    "Ljusnarsberg",
    "Vindeln",
    "Nybro",
    "Kramfors",
    "Trollhättan",
    "Hörby",
    "Ljungby",
    "Kiruna",
    "Härnösand",
    "Upplands-Bro",
    "Burlöv",
    "Malmö",
    "Nynäshamn",
    "Strängnäs",
    "Storfors",
    "Markaryd",
    "Dals-Ed",
    "Färgelanda",
    "Nora",
    "Tjörn",
    "Storuman",
    "Haninge",
    "Robertsfors",
    "Östersund",
    "Hallstahammar",
    "Nykvarn",
    "Lund",
    "Västervik",
    "Hallsberg",
    "Kalix",
    "Salem",
    "Kil",
    "Uppvidinge",
    "Mölndal",
    "Tibro",
    "Nacka",
    "Älvkarleby",
    "Nordmaling",
    "Vara",
    "Surahammar",
    "Kristinehamn",
    "Staffanstorp",
    "Timrå",
    "Bengtsfors",
    "Älmhult",
    "Vingåker",
    "Habo",
    "Vimmerby",
    "Munkedal",
    "Enköping",
    "Hedemora",
    "Lidingö",
    "Tanum",
    "Heby",
    "Skövde",
    "Köping",
    "Hammarö",
    "Örkelljunga",
    "Eda",
    "Botkyrka",
    "Danderyd",
    "Torsås",
    "Skara",
    "Vadstena",
    "Vaggeryd",
    "Perstorp",
    "Vårgårda",
    "Falköping",
    "Åtvidaberg",
    "Älvsbyn",
    "Kinda",
    "Svenljunga",
    "Överkalix",
    "Haparanda",
    "Partille",
    "Osby",
    "Sigtuna",
    "Fagersta",
    "Valdemarsvik",
    "Stockholm",
    "Herrljunga",
    "Sollentuna",
    "Säffle",
    "Gnesta",
    "Ydre",
    "Vilhelmina",
    "Lomma",
    "Flen",
    "Sorsele",
    "Täby",
    "Hjo",
    "Tyresö",
    "Strömsund",
    "Mullsjö",
    "Emmaboda",
    "Kungsör",
    "Upplands Väsby",
    "Högsby",
    "Vänersborg",
    "Skinnskatteberg",
    "Laxå",
    "Öckerö",
    "Norberg",
    "Ragunda",
    "Solna",
    "Arboga",
    "Malå",
    "Årjäng",
    "Åmål",
    "Oxelösund",
    "Vaxholm",
    "Norsjö",
    "Bjurholm",
    "Grästorp",
    "Sundbyberg",
    "Arjeplog",
  ];

  const inputs = {
    Regional: document.querySelector(".regions"),
    Municipal: document.querySelector(".cities"),
  };
  const radioButtons = document.querySelectorAll('input[name="btn-choices"]');
  const form = document.getElementById("form1");

  // Hide both input fields at start
  Object.values(inputs).forEach((div) => (div.style.display = "none"));

  // Setup autocomplete for both inputs
  setupAutocomplete(document.getElementById("region"), regions);
  setupAutocomplete(document.getElementById("cities"), cities);

  // Listen to radio button changes
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      Object.values(inputs).forEach((div) => (div.style.display = "none"));
      if (inputs[this.value]) {
        inputs[this.value].style.display = "block";
      }
    });
  });

  // ------------------------ EVALUATE / DISCOVER FORM SUBMIT ---------------------------------
  document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const btnChoice = document.querySelector('input[name="btn-choices"]:checked');
    const btnChoice2 = document.querySelector('input[name="btn-choices2"]:checked');
    const region = document.getElementById("region").value.trim();
    const cities = document.getElementById("cities").value.trim();
    const alertMessage = document.getElementById("alertMessage");

    // Clear previous alert messages
    alertMessage.textContent = "";
    alertMessage.classList.add("hidden");

    if (!btnChoice || !btnChoice2) {
      alertMessage.textContent = "Please select Discover or Evaluate.";
      alertMessage.classList.remove("hidden");
      return;
    }

    // Validation depending on selected btnChoice
    if (btnChoice.value === "Regional" && region === "") {
      alertMessage.textContent = "Please enter a region.";
      alertMessage.classList.remove("hidden");
      return;
    }
    if (btnChoice.value === "Municipal" && cities === "") {
      alertMessage.textContent = "Please enter a municipality.";
      alertMessage.classList.remove("hidden");
      return;
    }

    // Redirect logic
    if (btnChoice2.value === "Evaluate") {
      window.location.href = "evaluate.html"; // One page for Evaluate
    } else if (btnChoice2.value === "Discover") {
      window.location.href = "discover.html"; // One page for Discover
    } else {
      alertMessage.textContent = "Invalid form selection.";
      alertMessage.classList.remove("hidden");
    }
  });
});

// Function to setup autocomplete behavior
function setupAutocomplete(input, options) {
  const list = document.createElement("div");

  list.className = "autocomplete-items poppins-regular";
  input.parentNode.appendChild(list);

  let activeIndex = -1;

  input.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    list.innerHTML = "";
    activeIndex = -1;
    if (!value) return;

    options
      .filter((opt) => opt.toLowerCase().startsWith(value))
      .forEach((match) => {
        const item = document.createElement("div");
        item.innerText = match;
        item.addEventListener("click", () => {
          input.value = match;
          list.innerHTML = "";
        });
        list.appendChild(item);
      });
  });

  input.addEventListener("keydown", function (e) {
    const items = list.querySelectorAll("div");
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      activeIndex = e.key === "ArrowDown" ? activeIndex + 1 : activeIndex - 1;
      highlight(items);
      e.preventDefault();
    } else if (e.key === "Enter" && activeIndex > -1) {
      e.preventDefault();
      items[activeIndex]?.click();
    }
  });

  function highlight(items) {
    if (!items.length) return;
    items.forEach((item) => item.classList.remove("autocomplete-active"));
    activeIndex = (activeIndex + items.length) % items.length;
    items[activeIndex].classList.add("autocomplete-active");
  }

  document.addEventListener("click", (e) => {
    if (e.target !== input) list.innerHTML = "";
  });
}

// document.addEventListener("DOMContentLoaded", function () {
//   const params = new URLSearchParams(window.location.search);

//   const region = params.get("Regional");
//   const city = params.get("Municipality");

//   console.log(region, city); // LÄGG TILL denna för att felsöka!

//   const output = document.getElementById("output");

//   if (region && city) {
//     output.innerText = `You selected region: ${region}, city: ${city}`;
//   } else {
//     output.innerText = "Missing information!";
//   }
// });

const HEJ = document.querySelectorAll("#form1 input");
const HejLoop = Array.from(HEJ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
console.log("HejLoop:", HejLoop);
// -------------------------- EVALUATE PAGE --------------------------------------
// ------------------------ Choose file button ---------------------------------

const fileUpload = document.getElementById("file-upload");
const customButton = document.getElementById("btn-custom-file");

// Create a container for filename and remove button
const fileInfo = document.createElement("div");
fileInfo.id = "file-info";
customButton.insertAdjacentElement("afterend", fileInfo);

customButton.addEventListener("click", function () {
  fileUpload.click();
});

fileUpload.addEventListener("change", function () {
  // Clear any previous filename and button
  fileInfo.innerHTML = "";

  if (fileUpload.files.length > 0) {
    const fileName = fileUpload.files[0].name;

    // Create and display filename
    const fileNameDisplay = document.createElement("p");
    fileNameDisplay.className = "file-info-text";
    fileNameDisplay.textContent = fileName;
    fileInfo.appendChild(fileNameDisplay);

    // Create and display remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "×";
    removeButton.type = "button";
    removeButton.className = "btn-remove-file"; // reuse your styling

    removeButton.addEventListener("click", function () {
      fileUpload.value = ""; // clear the file input
      fileInfo.innerHTML = ""; // remove filename + button
    });

    fileInfo.appendChild(removeButton);
  }
});

// ------------------------ UPLOAD BUTTON -----------------------------

// Get the radio buttons and the container
const radioButtons = document.querySelectorAll('input[name="btn-choices3"]');
const fileUploadContainer = document.querySelector(".btn-custom-container");

// Add event listeners to each radio button
radioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    if (document.querySelector('input[name="btn-choices3"]:checked')) {
      // Show the file upload container if a radio button is selected
      fileUploadContainer.style.display = "flex";
    }
  });
});
