const text = document.querySelector("#text");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const errorElement = document.querySelector("#error");
// Parte de modal
const btnAbrirModal = document.querySelector("#btn-open-modal");
const btnCerrarModal = document.querySelector("#btn-cerra-modal");
const modal = document.querySelector("#modal");

// Validacion
form.addEventListener("submit", (element) => {
  let messages = [];
  if (text.value == "" || text.value == null) {
    messages.push("Se requiere el nombre");
  }

  if (password.value.length <= 8) {
    messages.push("La contraseña debe ser mayor a 8 caracteres");
  }
  if (password.value.length > 30) {
    messages.push("La contraseña debe ser menor a 30 caracteres");
  }

  if (messages.length > 0) {
    element.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

// modal

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});
