const productos = [
  { id: 01, tipo: "Celular", marca: "Motorola", modelo: "E32", precio: 46.045 },
  { id: 02, tipo: "Celular", marca: "Motorola", modelo: "E22", precio: 46.045 },
  {
    id: 03,
    tipo: "Celular",
    marca: "Motorola",
    modelo: "E22i",
    precio: 42.542,
  },
  { id: 04, tipo: "Celular", marca: "Motorola", modelo: "EG32", precio: 70.57 },
  {
    id: 05,
    tipo: "Celular",
    marca: "Samsung",
    modelo: "Galaxy A03",
    precio: 42.542,
  },
  {
    id: 06,
    tipo: "Celular",
    marca: "Samsung",
    modelo: "Galaxy A53",
    precio: 150.149,
  },
  {
    id: 07,
    tipo: "Celular",
    marca: "Samsung",
    modelo: "Galaxy A22",
    precio: 83.583,
  },
  {
    id: 08,
    tipo: "Celular",
    marca: "Samsung",
    modelo: "Galaxy A13",
    precio: 56.055,

  },
];

/*Capturamos el elemento de la tabla*/

const tbody = document.querySelector(".card-group");

/*Recorro el array y genero un documento a insertar en el html*/
productos.forEach((producto) => {
  tbody.innerHTML += `
  <div class="card m-1 rounded-1">
  <img src="./Multimedia/img-section/Celulares/Motorola/moto E20.jpg" class="card-img-top border-bottom"
    alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">Celular Libre ${producto.marca} ${producto.modelo}</h5>
  </div>
  <div class="card-body d-flex justify-content-evenly">
    <div class="card-body-preciomt text-primary">
      <h5 class="card-title text-center">PRECIO MT</h5>
      <h5 class="card-title text-center">${producto.precio}</h5>
    </div>
    <div class="card-body-preciolista border-start">
      <h6 class="card-title text-center ms-3">PRECIO LISTA</h6>
      <h6 class="card-title text-center ms-3">$35.999</6>
    </div>
  </div>
  <div class="card-body-cuotas">
    <h6 class="card-title text-center">6 cuotas sin interes de $5.999,83</h6>
  </div>
  <div class="card-body-button d-flex justify-content-evenly p-1">
    <button class="button-editar btm btn-sm btn-warning" data-id="${producto.id}" onclick="editarProducto(${producto.id})">Editar</button></td>
    <button class="button-borrar btm btn-sm btn-danger" data-id="${producto.id}" onclick="borrarProducto(${producto.id})">Borrar</button></td>
  </div>
</div>
    `;
});

//funcion para borrar producto

function borrarProducto(id) {
  const index = productos.findIndex((producto) => producto.id == id);
  productos.splice(index, 1);
  tbody.innerHTML = "";
  productos.forEach((producto) => {
    tbody.innerHTML += `
    <div class="card m-1 rounded-1">
    <img src="./Multimedia/img-section/Celulares/Motorola/moto E20.jpg" class="card-img-top border-bottom"
      alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Celular Libre ${producto.marca} ${producto.modelo}</h5>
    </div>
    <div class="card-body d-flex justify-content-evenly">
      <div class="card-body-preciomt text-primary">
        <h5 class="card-title text-center">PRECIO MT</h5>
        <h5 class="card-title text-center">${producto.precio}</h5>
      </div>
      <div class="card-body-preciolista border-start">
        <h6 class="card-title text-center ms-3">PRECIO LISTA</h6>
        <h6 class="card-title text-center ms-3">$35.999</6>
      </div>
    </div>
    <div class="card-body-cuotas">
      <h6 class="card-title text-center">6 cuotas sin interes de $5.999,83</h6>
    </div>
    <div class="card-body-button d-flex justify-content-evenly p-1">
      <button class="button-editar btm btn-sm btn-warning" data-id="${producto.id}" onclick="editarProducto(${producto.id})">Editar</button></td>
      <button class="button-borrar btm btn-sm btn-danger" data-id="${producto.id}" onclick="borrarProducto(${producto.id})">Borrar</button></td>
    </div>
  </div>
    `;
  });
}

//funcion para editar producto

function editarProducto(id) {
  const index = productos.findIndex((producto) => producto.id == id);
  const producto = productos[index];
  const nuevoTipo = prompt(
    `Ingrese el nuevo tipo (anterior: ${producto.tipo}):`
  );
  const nuevaMarca = prompt(
    `Ingrese la nueva marca (anterior: ${producto.marca}):`
  );
  const nuevoModelo = prompt(
    `Ingrese el nuevo modelo (anterior: ${producto.modelo}):`
  );
  const nuevoPrecio = prompt(
    `Ingrese el nuevo precio (anterior: ${producto.precio}):`
  );

  if (nuevoTipo || nuevaMarca || nuevoModelo || nuevoPrecio) {
    productos[index] = {
      id: id,
      tipo: nuevoTipo || producto.tipo,
      marca: nuevaMarca || producto.marca,
      modelo: nuevoModelo || producto.modelo,
      precio: nuevoPrecio || producto.precio,
    };

    tbody.innerHTML = "";
    productos.forEach((producto) => {
      tbody.innerHTML += `
    <div class="card m-1 rounded-1">
    <img src="./Multimedia/img-section/Celulares/Motorola/moto E20.jpg" class="card-img-top border-bottom"
      alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Celular Libre ${producto.marca} ${producto.modelo}</h5>
    </div>
    <div class="card-body d-flex justify-content-evenly">
      <div class="card-body-preciomt text-primary">
        <h5 class="card-title text-center">PRECIO MT</h5>
        <h5 class="card-title text-center">${producto.precio}</h5>
      </div>
      <div class="card-body-preciolista border-start">
        <h6 class="card-title text-center ms-3">PRECIO LISTA</h6>
        <h6 class="card-title text-center ms-3">$35.999</6>
      </div>
    </div>
    <div class="card-body-cuotas">
      <h6 class="card-title text-center">6 cuotas sin interes de $5.999,83</h6>
    </div>
    <div class="card-body-button d-flex justify-content-evenly p-1">
      <button class="button-editar btm btn-sm btn-warning" data-id="${producto.id}" onclick="editarProducto(${producto.id})">Editar</button></td>
      <button class="button-borrar btm btn-sm btn-danger" data-id="${producto.id}" onclick="borrarProducto(${producto.id})">Borrar</button></td>
    </div>
  </div>
    `;
    });
  }
}

//funcion para agregar prodo

const buttonAgregar = document.getElementById("button-agregar");

buttonAgregar.addEventListener("click", () => {
  const tipo = prompt("Ingrese el tipo de producto:");
  const marca = prompt("Ingrese la marca del producto:");
  const modelo = prompt("Ingrese el modelo del producto:");
  const precio = prompt("Ingrese el precio del producto:");
  const id = productos.length + 1;
  const nuevoProducto = { id, tipo, marca, modelo, precio };
  productos.push(nuevoProducto);

  tbody.innerHTML = "";
    productos.forEach((producto) => {
      tbody.innerHTML += `
  <div class="card m-1 rounded-1">
  <img src="./Multimedia/img-section/Celulares/Motorola/moto E20.jpg" class="card-img-top border-bottom"
    alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">Celular Libre ${producto.marca} ${producto.modelo}</h5>
  </div>
  <div class="card-body d-flex justify-content-evenly">
    <div class="card-body-preciomt text-primary">
      <h5 class="card-title text-center">PRECIO MT</h5>
      <h5 class="card-title text-center">${producto.precio}</h5>
    </div>
    <div class="card-body-preciolista border-start">
      <h6 class="card-title text-center ms-3">PRECIO LISTA</h6>
      <h6 class="card-title text-center ms-3">$35.999</6>
    </div>
  </div>
  <div class="card-body-cuotas">
    <h6 class="card-title text-center">6 cuotas sin interes de $5.999,83</h6>
  </div>
  <div class="card-body-button d-flex justify-content-evenly p-1">
    <button class="button-editar btm btn-sm btn-warning" data-id="${producto.id}" onclick="editarProducto(${producto.id})">Editar</button></td>
    <button class="button-borrar btm btn-sm btn-danger" data-id="${producto.id}" onclick="borrarProducto(${producto.id})">Borrar</button></td>
  </div>
</div>
  // `})
})
