document.addEventListener("DOMContentLoaded", function() {
    // Obtén el último ID de input almacenado en el localStorage (si existe)
    const lastInputId = localStorage.getItem("lastInputId");

    // Si hay un último ID de input almacenado, enfoca en ese input
    if (lastInputId) {
        const lastInput = document.getElementById(lastInputId);
        if (lastInput) {
        lastInput.focus();
        }
    }

    // Agrega un event listener para los eventos de submit en los formularios
    document.addEventListener("submit", function(event) {
        // Obtén el formulario y el input donde se hizo submit
        const form = event.target;
        const input = form.querySelector("input[type='text']");

        // Guarda el ID del último input en el localStorage
        localStorage.setItem("lastInputId", input.id);
    });
});