// -------------------------- YES OR NO --------------------------------------
// Get the radio buttons and the container
const radioButtons = document.querySelectorAll('input[name="btn-choices4"]');
const fileUploadContainer = document.querySelector(".upload-container");

// Add event listeners to each radio button
radioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    if (document.querySelector('input[id="btn-choice8"]:checked')) {
      // Show the file upload container if a radio button is selected
      fileUploadContainer.style.display = "block";
    } else {
      fileUploadContainer.style.display = "none";
    }
  });
});

// -----------------------UPLOAD BUTTON ------------------------

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

window.addEventListener("DOMContentLoaded", (event) => {
  const form3 = document.getElementById("form3");
  const outputEval = document.getElementById("outputEval");

  // Store choices here
  let userChoices = JSON.parse(localStorage.getItem("choicesLocal")) || {};

  // FORM PAGE: when submitting
  if (form3) {
    form3.addEventListener("submit", function (event) {
      event.preventDefault();

      const facilityInput = document.getElementById("number-input1");
      const alertMessage = document.getElementById("alertMessage");
      const value = parseInt(facilityInput.value);

      if (isNaN(value) || value === "" || value < 0 || value > 100) {
        alertMessage.textContent = "Please enter a number between 0 and 100.";
        alertMessage.classList.remove("hidden");
        return;
      } else {
        alertMessage.classList.add("hidden");
      }

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
});
