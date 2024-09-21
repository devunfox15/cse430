var dynamicMessage = document.querySelector(".dynamicMessage");
var userNameInput = document.getElementById("userNameInput");
var updateNameButton = document.getElementById("updateNameButton");
var keyWordsElement = document.querySelector(".KeyWords");
var errorElement = document.querySelector(".error"); // Target the error div
// Add event listener to update message on button click
updateNameButton === null || updateNameButton === void 0
    ? void 0
    : updateNameButton.addEventListener("click", function () {
          if (
              userNameInput === null || userNameInput === void 0
                  ? void 0
                  : userNameInput.value
          ) {
              var enteredName = userNameInput.value.trim();
              // Check if the entered name contains numbers
              if (/\d/.test(enteredName)) {
                  // \d checks for any digits (0-9)
                  // Add a new <p> tag to the .error div with the error message
                  if (errorElement) {
                      var errorParagraph = document.createElement("p"); // Create a new <p> element
                      errorParagraph.className = "text-2xl text-center pt-6"; // Add the classes
                      errorParagraph.textContent =
                          "Error: Numbers are not allowed for this invite!";
                      errorParagraph.style.color = "red"; // Set color to red
                      // Remove any existing error messages before adding the new one
                      while (errorElement.firstChild) {
                          errorElement.removeChild(errorElement.firstChild);
                      }
                      errorElement.appendChild(errorParagraph); // Append the new error message
                      errorElement.classList.remove("hidden"); // Make the error message visible
                  }
                  // Make the KeyWords element visible again
                  if (keyWordsElement) {
                      keyWordsElement.style.display = "flex"; // Reset to visible state
                  }
                  // Clear the input field and stop execution
                  userNameInput.value = "";
                  return;
              }
              // Clear the error message if no number is present
              if (errorElement) {
                  errorElement.classList.add("hidden"); // Hide the error message
                  while (errorElement.firstChild) {
                      errorElement.removeChild(errorElement.firstChild); // Remove all error messages
                  }
              }
              // Check if the user enters "Devun Fox Durst"
              if (enteredName === "Devun Fox Durst") {
                  // Reset the dynamic message to its original state
                  if (dynamicMessage) {
                      dynamicMessage.innerHTML =
                          'My name is <span class="text-[#391585]">Devun Fox Durst</span>';
                  }
                  // Make the KeyWords element visible again
                  if (keyWordsElement) {
                      keyWordsElement.style.display = "flex"; // Assuming it was flex before
                  }
                  return; // Stop further execution
              }
              // If the entered name is not "Devun Fox Durst", update the message and hide KeyWords
              if (dynamicMessage) {
                  dynamicMessage.textContent = "Hey, ".concat(
                      enteredName,
                      ", You seem cool. Connect with me on LinkedIn!"
                  );
                  if (keyWordsElement) {
                      keyWordsElement.style.display = "none"; // Hide the KeyWords
                  }
              }
              // Clear the input field after the update
              userNameInput.value = "";
          }
      });
