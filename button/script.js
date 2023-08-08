document.getElementById("toggleButton").addEventListener("click", function() {
    var content = document.getElementById("content");
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden"); 
      document.getElementById("toggleButton").innerText = "Hide"; // Change button text to "Hide"
    } else {
      content.classList.add("hidden"); // Hide the content
      document.getElementById("toggleButton").innerText = "Show"; // Change button text to "Show"
    }
  });
  