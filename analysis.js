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
  const municipality = [
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
    Municipal: document.querySelector(".municipality"),
  };
  const radioButtons = document.querySelectorAll('input[name="btn-choices"]');
  const form = document.getElementById("form1");

  // Hide both input fields at start
  Object.values(inputs).forEach((div) => (div.style.display = "none"));

  // Setup autocomplete for both inputs
  setupAutocomplete(document.getElementById("region"), regions);
  setupAutocomplete(document.getElementById("municipality"), municipality);

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

    const btnChoice = document.querySelector('input[name="btn-choices"]:checked'); // National, region & Municipal
    const btnChoice2 = document.querySelector('input[name="btn-choices2"]:checked'); //Discover & evaluate
    const region = document.getElementById("region").value.trim();
    const municipality2 = document.getElementById("municipality").value.trim();
    const alertMessage = document.getElementById("alertMessage");

    // Clear previous alert messages
    alertMessage.textContent = "";
    alertMessage.classList.add("hidden");

    if (!btnChoice) {
      alertMessage.textContent = "Please select geographical area.";
      alertMessage.classList.remove("hidden");
      return;
    }

    if (!btnChoice2) {
      alertMessage.textContent = "Please select Discover or Evaluate.";
      alertMessage.classList.remove("hidden");
      return;
    }

    // Validation depending on selected btnChoice
    if (btnChoice.value === "Regional") {
      document.getElementById("municipality").value = "";
      if (region === "" || !regions.includes(region)) {
        alertMessage.textContent = "Please enter a valid region.";
        alertMessage.classList.remove("hidden");
        return;
      }
    }

    if (btnChoice.value === "Municipal") {
      document.getElementById("region").value = "";
      if (municipality2 === "" || !municipality.includes(municipality2)) {
        alertMessage.textContent = "Please enter a valid municipality.";
        alertMessage.classList.remove("hidden");
        return;
      }
    }

    if (btnChoice.value === "") {
      alertMessage.textContent = "Please choose Geograpical area of interest.";
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

// -------------------------- AUTOCOMPLETE ------------------------------

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

// -------------------------- HANDLE USER CHOICES --------------------------------------
window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("form1");
  const output = document.getElementById("output");

  // Store choices here
  const userChoices = {};

  //   Attach click listeners to choice buttons
  const discoverEvaluateRadios = document.querySelectorAll("#form1 input[name='btn-choices2']");
  discoverEvaluateRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        userChoices["Analysis mode"] = radio.value; // Save whether it's "Evaluate" or "Discover"
        console.log("User selected Analysis mode:", userChoices["Analysis mode"]);
      }
    });
  });

  // FORM PAGE: when submitting
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Also check if they typed something in 'national'
      const geoChoice = document.querySelector('input[id="btn-choice1"]:checked');
      if (geoChoice) {
        userChoices["Nation"] = "Sweden"; // e.g. "National"
      }

      // Also check if they typed something in 'region'
      const regionInput = document.getElementById("region");
      if (regionInput && regionInput.value.trim() !== "") {
        userChoices["Region"] = regionInput.value.trim();
      }

      // Check if they typed something in 'municipality'

      const municipalInput = document.getElementById("municipality");
      if (municipalInput && municipalInput.value.trim() !== "") {
        userChoices["Municipality"] = municipalInput.value.trim();
      }

      console.log("Final saved choices:", userChoices);

      localStorage.setItem("choicesLocal", JSON.stringify(userChoices));
    });

    // window.location.href = "verify.html";
  }

  // EVALUATE PAGE: showing the results
  if (output) {
    const storedData = localStorage.getItem("choicesLocal");

    if (storedData) {
      const storedchoicesLocal = JSON.parse(storedData);

      for (const [key, value] of Object.entries(storedchoicesLocal)) {
        const p = document.createElement("p");
        if (key == "Nation" || key == "Municipality" || key == "Region" || key == "Analysis mode") {
          p.textContent = `${key.replace("btn-choice", "")}: ${value}`;
          p.classList.add("poppins-regular");
          output.appendChild(p);
        }
        // if (key == "Nation") {
        //   p.textContent = `${key.replace("btn-choice", "")}: Sweden`;
        //   p.classList.add("poppins-regular");
        //   output.appendChild(p);
        else {
          p.textContent = `Number of ${key.replace("btn-choice", "")}: ${value}`;
          p.classList.add("poppins-regular");
          output.appendChild(p);
        }
      }
    } else {
      output.textContent = "No submitted data found!";
    }
  }
});
