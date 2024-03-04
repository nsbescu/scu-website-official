// Fetch and insert specific content from another HTML file
fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    // Create a temporary container to extract the specific content
    var tempContainer = document.createElement("div");
    tempContainer.innerHTML = data;

    // Find and extract the desired content
    var importedContent = tempContainer.querySelector(".navbar");

    // Check if the content was found
    if (importedContent) {
      // Insert the content into the target div
      document.getElementById("targetHeaderDiv").appendChild(importedContent);
    } else {
      console.error(
        'Element with class "navbar" not found in the imported content.'
      );
    }
  })
  .catch((error) => console.error("Error fetching content:", error));
