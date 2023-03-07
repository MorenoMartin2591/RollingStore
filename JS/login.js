const email = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");
const registro = document.getElementById("loginForm");

const localToken = "Admin";
const userToken = "User";

const adminUser = {
  email: "admin@admin.com",
  password: "Admin@1234",
};

const compraUser = {
  email: "user@user.com",
  password: "user@1234",
};

registro.onsubmit = (e) => {
  e.preventDefault();
  if (
    email.value === adminUser.email &&
    password.value === adminUser.password
  ) {
    localStorage.setItem("token", JSON.stringify(localToken));
    window.location.href = "index-admin.html";
  } else if (
    email.value === compraUser.email &&
    password.value === compraUser.password
  ) {
    localStorage.setItem("token", JSON.stringify(userToken));
    window.location.href = "index.html";
  } else {
    alert("Datos incorrectos, vuelva a intentarlo.");
  }
};

// const errorElement = document.querySelector("#error");

// Parte de modal
// const btnAbrirModal = document.querySelector("#btn-open-modal");
// const btnCerrarModal = document.querySelector("#btn-cerra-modal");
// const modal = document.querySelector("#modal");

// // Validacion
// form.addEventListener("exampleInputEmail1", (element) => {
//   let messages = [];
//   if (email.value == "" || password.value == null) {
//     messages.push("Se requiere el nombre");
//   }

//   if (password.value.length <= 8) {
//     messages.push("La contraseña debe ser mayor a 8 caracteres");
//   }
//   if (password.value.length > 30) {
//     messages.push("La contraseña debe ser menor a 30 caracteres");
//   }

//   if (messages.length > 0) {
//     element.preventDefault();
//     errorElement.innerText = messages.join(", ");
//   }
// });
