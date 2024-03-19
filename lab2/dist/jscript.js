
function showPopup(popup) {
    const popupElement = document.getElementById(popup);
    popupElement.classList.toggle("hidden");
  }

  const form = document.querySelector("#popup form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const descriptionInput = document.getElementById("description");
    const deadlineInput = document.getElementById("deadline");

    const description = descriptionInput.value;
    const deadline = deadlineInput.value;

    const table = document.querySelector("table tbody");
    const newRow = document.createElement("tr");

    const taskCell = document.createElement("td");
    taskCell.textContent = description;
    newRow.appendChild(taskCell);

    const deadlineCell = document.createElement("td");
    deadlineCell.textContent = deadline;
    newRow.appendChild(deadlineCell);

    const statusCell = document.createElement("td");
    statusCell.textContent = "Not Started";
    newRow.appendChild(statusCell);

    table.appendChild(newRow);

    // Reset the form fields
    descriptionInput.value = "";
    deadlineInput.value = "";

    // Hide the popup
    showPopup("popup");
  });
