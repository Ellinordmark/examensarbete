// ----------------------- DROPDOWN FOR REGIONS & CITIES ---------------------------
// document.addEventListener("DOMContentLoaded", function () {
    

//     const inputRegions = document.getElementById("region");
//     const inputCities = document.getElementById("cities");

//     setupAutocomplete(inputRegions, regions);
//     setupAutocomplete(inputCities, cities);
// });



// // autocomplete function
// function setupAutocomplete(inputElement, optionsArray) {
//     const listElement = document.createElement("div");
//     listElement.setAttribute("class", "autocomplete-items");
//     inputElement.parentNode.appendChild(listElement);

//     let activeIndex = -1;

//     inputElement.addEventListener("input", function () {
//         const value = this.value.toLowerCase();
//         listElement.innerHTML = "";
//         activeIndex = -1;

//         if (!value) return;

//         const matches = optionsArray.filter(option => option.toLowerCase().startsWith(value));
//         matches.forEach(match => {
//             const item = document.createElement("div");
//             item.innerText = match;
//             item.addEventListener("click", function () {
//                 inputElement.value = match;
//                 listElement.innerHTML = "";
//             });
//             listElement.appendChild(item);
//         });
//     });

//     inputElement.addEventListener("keydown", function (e) {
//         const items = listElement.getElementsByTagName("div");
//         if (e.key === "ArrowDown") {
//             activeIndex++;
//             highlightActive(items);
//             e.preventDefault();
//         } else if (e.key === "ArrowUp") {
//             activeIndex--;
//             highlightActive(items);
//             e.preventDefault();
//         } else if (e.key === "Enter") {
//             e.preventDefault();
//             if (activeIndex > -1 && items[activeIndex]) {
//                 items[activeIndex].click();
//             }
//         }
//     });

//     function highlightActive(items) {
//         if (!items.length) return;
//         for (let i = 0; i < items.length; i++) {
//             items[i].classList.remove("autocomplete-active");
//         }
//         if (activeIndex >= items.length) activeIndex = 0;
//         if (activeIndex < 0) activeIndex = items.length - 1;
//         items[activeIndex].classList.add("autocomplete-active");
//     }

//     document.addEventListener("click", function (e) {
//         if (e.target !== inputElement) {
//             listElement.innerHTML = "";
//         }
//     });
// }

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
        "Stockholm"
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
        "Arjeplog"
        ];

    const inputRegions = document.getElementById("region");
    const inputCities = document.getElementById("cities");

    const regionsDiv = document.querySelector(".regions");
    const citiesDiv = document.querySelector(".cities");
    const radioButtons = document.querySelectorAll('input[name="btn-choices"]');

    // Hide inputs initially
    regionsDiv.style.display = "none";
    citiesDiv.style.display = "none";

    // Setup global autocomplete
    setupAutocomplete(inputRegions, regions);
    setupAutocomplete(inputCities, cities);

    // Listen for radio button changes
    radioButtons.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value === "National") {
                regionsDiv.style.display = "none";
                citiesDiv.style.display = "none";
            } else if (this.value === "Regional") {
                regionsDiv.style.display = "block";
                citiesDiv.style.display = "none";
            } else if (this.value === "Municipal") {
                regionsDiv.style.display = "none";
                citiesDiv.style.display = "block";
            }
        });
    });
});

// Global autocomplete function
function setupAutocomplete(inputElement, optionsArray) {
    const listElement = document.createElement("div");
    listElement.setAttribute("class", "autocomplete-items");
    inputElement.parentNode.appendChild(listElement);

    let activeIndex = -1;

    inputElement.addEventListener("input", function () {
        const value = this.value.toLowerCase();
        listElement.innerHTML = "";
        activeIndex = -1;

        if (!value) return;

        const matches = optionsArray.filter(option => option.toLowerCase().startsWith(value));
        matches.forEach(match => {
            const item = document.createElement("div");
            item.innerText = match;
            item.addEventListener("click", function () {
                inputElement.value = match;
                listElement.innerHTML = "";
            });
            listElement.appendChild(item);
        });
    });

    inputElement.addEventListener("keydown", function (e) {
        const items = listElement.getElementsByTagName("div");
        if (e.key === "ArrowDown") {
            activeIndex++;
            highlightActive(items);
            e.preventDefault();
        } else if (e.key === "ArrowUp") {
            activeIndex--;
            highlightActive(items);
            e.preventDefault();
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (activeIndex > -1 && items[activeIndex]) {
                items[activeIndex].click();
            }
        }
    });

    function highlightActive(items) {
        if (!items.length) return;
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("autocomplete-active");
        }
        if (activeIndex >= items.length) activeIndex = 0;
        if (activeIndex < 0) activeIndex = items.length - 1;
        items[activeIndex].classList.add("autocomplete-active");
    }

    document.addEventListener("click", function (e) {
        if (e.target !== inputElement) {
            listElement.innerHTML = "";
        }
    });
}
