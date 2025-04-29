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

//SUBMIT

window.addEventListener("DOMContentLoaded", (event) => {
  const form2 = document.getElementById("form2");
  const outputEval = document.getElementById("outputEval");

  // Store choices here
  let userChoices = JSON.parse(localStorage.getItem("choicesLocal")) || {};

  //   Attach click listeners to choice buttons
  // const discoverEvaluateRadios = document.querySelectorAll("#form1 input[name='btn-choices2']");
  // discoverEvaluateRadios.forEach((radio) => {
  //   radio.addEventListener("change", () => {
  //     if (radio.checked) {
  //       userChoices["mode"] = radio.value; // Save whether it's "Evaluate" or "Discover"
  //       console.log("User selected mode:", userChoices["mode"]);
  //     }
  //   });
  // });

  // FORM PAGE: when submitting
  if (form2) {
    form2.addEventListener("submit", function (event) {
      event.preventDefault();

      const facilityInput = document.getElementById("number-input1");
      if (facilityInput && facilityInput.value.trim() !== "") {
        userChoices["facilities"] = facilityInput.value.trim();
      }

      localStorage.setItem("choicesLocal", JSON.stringify(userChoices));
      console.log("Saved to localStorage:", JSON.stringify(userChoices));
      // Delay navigation slightly to ensure localStorage is written
      setTimeout(() => {
        window.location.href = "verify.html";
      }, 50); // 50ms is usually enough
    });
  }

  // EVALUATE PAGE: showing the results
  //   if (outputEval) {
  //     const storedData = localStorage.getItem("choicesLocal");

  //     if (storedData) {
  //       const storedchoicesLocal = JSON.parse(storedData);

  //       for (const [key, value] of Object.entries(storedchoicesLocal)) {
  //         const p = document.createElement("p");
  //         p.textContent = `blablabla ${key.replace("btn-choice", "")}: ${value}`;
  //         p.classList.add("poppins-semibold");
  //         outputEval.appendChild(p);
  //       }
  //     } else {
  //       outputEval.textContent = "No submitted data found!";
  //     }
  //     console.log("Number of facilites choosen:", userChoices);
  //   }
});
