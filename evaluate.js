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
