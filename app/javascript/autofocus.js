// Gets all the tasks buttons to add an event listener
const taskButtons = document.getElementsByClassName("add-task-button");

// Transforms the html collection into an array
var taskButtonsArray = Array.from(taskButtons);

// Loops through the array to add event listeners to echa button, this will keep the id of the last iput field ID for the "Add task form"
taskButtonsArray.forEach((button) => {
    const bottonId = button.id
    const DOMButton = document.getElementById(bottonId);
    
    DOMButton.addEventListener("click", function(event) {
        // 
        const input = document.getElementById("text-field" + bottonId);

        // Guarda el ID del último input en el localStorage
        localStorage.setItem("lastInputId", input.id);
    });
});

// Gets all the delete list buttons to add an event listener
const deleteListButtons = document.getElementsByClassName("delete-list-button");
console.log(deleteListButtons)
// Transforms the html collection into an array
var deleteListButtonsArray = Array.from(deleteListButtons);

// Loops through the array to add event listeners to each button, this will errase the last submited input field id to restore local storage
deleteListButtonsArray.forEach((button) => {
    const bottonId = button.id
    const DOMButton = document.getElementById(bottonId);
    console.log(DOMButton)
    DOMButton.addEventListener("click", function(event) {

        // Guarda el ID del último input en el localStorage
        localStorage.removeItem("lastInputId");
    });
});

// Gets the last input field ID that was used to add a task if any
const lastInputId = localStorage.getItem("lastInputId");

// Gets the first input field ID if any
const firstInputId = taskButtonsArray[0].id
console.log(firstInputId)

// Set the focus to that input field
if (lastInputId) {

    const lastInput = document.getElementById(lastInputId);

    if (lastInput) {
        lastInput.focus();
    }

} else if (firstInputId){

    const firstInput = document.getElementById("text-field" + firstInputId);

    if (firstInput) {
        firstInput.focus();
    }
}