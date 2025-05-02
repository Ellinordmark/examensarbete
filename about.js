document.addEventListener("DOMContentLoaded", function () {
  console.log("JS WORKS");
  document.getElementById("customer-visits").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const form = event.target;
    const visits = form.elements["customers"].valueAsNumber;

    // Check if the input is a valid number
    if (isNaN(visits) || visits <= 0) {
      const errorMessage = document.getElementById("error-message");

      if (!errorMessage) {
        // Prevent multiple error messages
        const errorDiv = document.createElement("div");
        errorDiv.id = "error-message";
        errorDiv.style.color = "red";
        errorDiv.textContent = "Please enter a valid number of customers.";
        form.insertAdjacentElement("beforebegin", errorDiv);
      }
      return;
    }

    // Remove error message if input is valid
    const errorMessage = document.getElementById("error-message");
    if (errorMessage) {
      errorMessage.remove();
    }

    console.log("visits:", visits);

    const previousDisplay = document.getElementById("visit-display");
    if (previousDisplay) {
      previousDisplay.remove();
    }

    //Uträkning
    const calculated_km = visits * (3.5 * 2);
    console.log(calculated_km);

    const calculated_CO2 = calculated_km * 0.061;
    console.log("CO2:", calculated_CO2);

    //Format
    const formatted_km = calculated_km
      .toLocaleString("en-US") // Format with commas
      .replace(/,/g, " "); // Replace commas with spaces

    const formatted_CO2 = calculated_CO2.toLocaleString("en-US").replace(/,/g, " ");

    const formatted_visits = visits.toLocaleString("en-US").replace(/,/g, " ");

    console.log("Formatted Value:", formatted_km);

    const calcOutput = document.getElementById("result");
    calcOutput.innerHTML = `<div class="center-container"><p class="poppins-bold center-text">With ${formatted_visits} customers</p><p class="poppins-black large">${formatted_km} km</p><p class=" poppins-bold center-text">of travel could be saved.</p></div><div class="center-container"><p class="poppins-bold center-text-small">That equals to</p><p class="poppins-black medium">${formatted_CO2} kg</p><p class="poppins-bold center-text-small">of CO2 emissions.</p></div>`;
  });
});

// Get the button:
const topBtn = document.getElementById("btn-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
