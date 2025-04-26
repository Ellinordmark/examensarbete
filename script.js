// ----------------------- DROPDOWN FOR REGIONS ---------------------------
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

    const input_regions = document.getElementById("region");
    const list_regions = document.createElement("div");
    list_regions.setAttribute("id", "autocomplete-list1");
    list_regions.setAttribute("class", "autocomplete-items");
    input_regions.parentNode.appendChild(list_regions);

    let activeIndex = -1; // <-- Track which item is selected

    input_regions.addEventListener("input", function () {
        const value = this.value.toLowerCase();
        list_regions.innerHTML = "";
        activeIndex = -1; // reset active index

        if (!value) return;

        const matches_regions = regions.filter(city => city.toLowerCase().startsWith(value));
        matches_regions.forEach(match => {
            const item_regions = document.createElement("div");
            item_regions.innerText = match;
            item_regions.addEventListener("click", function () {
                input_regions.value = match;
                list_regions.innerHTML = "";
            });
            list_regions.appendChild(item_regions);
        });
    });

    input_regions.addEventListener("keydown", function (e) {
        const items = list_regions.getElementsByTagName("div");
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
        if (!items) return;
        // Remove all previous active classes
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("autocomplete-active");
        }
        if (activeIndex >= items.length) activeIndex = 0;
        if (activeIndex < 0) activeIndex = items.length - 1;
        items[activeIndex].classList.add("autocomplete-active");
    }

    document.addEventListener("click", function (e) {
        if (e.target !== input_regions) {
            list_regions.innerHTML = "";
        }
    });

    
});

// ----------------------- DROPDOWN FOR CITIES ---------------------------

document.addEventListener("DOMContentLoaded", function () {
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

    const input_cities = document.getElementById("cities");
    const list_cities = document.createElement("div");
    list_cities.setAttribute("id", "autocomplete-list2");
    list_cities.setAttribute("class", "autocomplete-items");
    input_cities.parentNode.appendChild(list_cities);

    let activeIndex = -1; // <-- Track which item is selected

    input_cities.addEventListener("input", function () {
        const value = this.value.toLowerCase();
        list_cities.innerHTML = "";
        activeIndex = -1; // reset active index

        if (!value) return;

        const matches_cities = cities.filter(city => city.toLowerCase().startsWith(value));
        matches_cities.forEach(match => {
            const item_cities = document.createElement("div");
            item_cities.innerText = match;
            item_cities.addEventListener("click", function () {
                input_cities.value = match;
                list_cities.innerHTML = "";
            });
            list_cities.appendChild(item_cities);
        });
    });

    input_cities.addEventListener("keydown", function (e) {
        const items = list_cities.getElementsByTagName("div");
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
        if (!items) return;
        // Remove all previous active classes
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("autocomplete-active");
        }
        if (activeIndex >= items.length) activeIndex = 0;
        if (activeIndex < 0) activeIndex = items.length - 1;
        items[activeIndex].classList.add("autocomplete-active");
    }

    document.addEventListener("click", function (e) {
        if (e.target !== input_cities) {
            list_cities.innerHTML = "";
        }
    });
});


