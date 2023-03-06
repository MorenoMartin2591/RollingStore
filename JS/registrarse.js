const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const errorElement = document.querySelector("#error");

form.addEventListener("submit", (element) => {
  let messages = [];
  // email
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  if (email.value === "") {
    messages.push("El email es requerido");
  } else if (!isValidEmail(email.value)) {
    messages.push("Proporcione una dirección de correo electrónico válida");
  }
  // username
  if (username.value == "" || username.value == null) {
    messages.push("Se requiere el nombre");
  }
  // password
  if (password.value.length <= 8) {
    messages.push("La contraseña debe ser mayor a 8 caracteres");
  }
  if (password.value.length > 30) {
    messages.push("La contraseña debe ser menor a 30 caracteres");
  }
  // rep password
  if (password2.value === "") {
    messages.push("Por favor confirma tu contraseña");
  } else if (password2.value !== password.value) {
    messages.push("Las contraseñas no coinciden");
  }

  if (messages.length > 0) {
    element.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
