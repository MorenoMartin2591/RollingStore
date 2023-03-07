const productos = [
  { id: 01,
    tipo: "Celular",
    marca: "Motorola",
    modelo: "E32", 
    precio: 46.045,
    imagen:"./Multimedia/img-section/Celulares/Motorola/moto_E32.webp",},
  { id: 02, 
    tipo: "Celular", 
    marca: "Motorola", 
    modelo: "E22", 
    precio: 46.045,
    imagen:"./Multimedia/img-section/Celulares/Motorola/motorola_E22.webp",},
  {
    id: 03,
    tipo: "Celular",
    marca: "Motorola",
    modelo: "E22i",
    precio: 42.542,
    imagen:"./Multimedia/img-section/Celulares/Motorola/motorola-e22i.webp"},
  { id: 04,
    tipo: "Celular",
    marca: "Motorola",
    modelo: "EG32",
    precio: 70.57,
    imagen:"./Multimedia/img-section/Celulares/Motorola/motorola_Egge_30_NEO.webp"},
  {
    id: 05,
    tipo: "Celular",
    marca: "Samsung",
    modelo: "Galaxy A03",
    precio: 42.542,
    imagen:"./Multimedia/img-section/Celulares/Samsung/samsung_galaxy_A03_CORE.jpg"
  },
  {
    id: 06,
    tipo: "Celular",
    marca: "Samsung",
    modelo: "Galaxy A53",
    precio: 150.149,
    imagen:"./Multimedia/img-section/Celulares/Samsung/samsung_galaxy_A53.jpg"
  },
  {
    id: 07,
    tipo: "Celular",
    marca: "Samsung",
    modelo: "Galaxy A22",
    precio: 83.583,
    imagen:"./Multimedia/img-section/Celulares/Samsung/samsung_galaxy_A22_5G.jpg"
  },
  {
    id: 08,
    tipo: "Celular",
    marca: "Samsung",
    modelo: "Galaxy A13",
    precio: 56.055,
    imagen:"./Multimedia/img-section/Celulares/Samsung/samsung_galaxy_A13_64GB.jpg",
  },
];



/*Capturamos el elemento de la tabla*/
const tbody = document.querySelector("tbody");

/*Recorro el array y genero un documento a insertar en el html*/
productos.forEach((producto) => {
  tbody.innerHTML += `
  <tr>
    <th class="text-center">${producto.id}</th>
    <td class="text-center">${producto.tipo}</td>
    <td class="text-center">${producto.marca}</td>
    <td class="text-center">${producto.modelo}</td>
    <td class="text-center">${producto.precio}</td>
    <td><button class="button-editar btm btn-sm btn-warning" data-id="${producto.id}" onclick="editarProducto(${producto.id})">Editar</button></td>
    <td><button class="button-borrar btm btn-sm btn-danger" data-id="${producto.id}" onclick="borrarProducto(${producto.id})">Borrar</button></td>
  </tr>
    `;
    //Subo mi array al local storage
   const json = JSON.stringify(productos); //los transforma en string
   localStorage.setItem('productos', json); //los sube a local storage  
});


function borrarProducto(id){
  let productos = JSON.parse(localStorage.getItem("productos") ||{})
  const index = productos.findIndex((producto) => producto.id == id);
  productos.splice(index, 1);
  tbody.innerHTML = "";
  productos.forEach((producto) => {
    tbody.innerHTML += `
    <tr>
    <th class="text-center">${producto.id}</th>
    <td class="text-center">${producto.tipo}</td>
    <td class="text-center">${producto.marca}</td>
    <td class="text-center">${producto.modelo}</td>
    <td class="text-center">${producto.precio}</td>
    <td><button class="button-editar btm btn-sm btn-warning" data-id="${producto.id}" onclick="editarProducto(${producto.id})">Editar</button></td>
    <td><button class="button-borrar btm btn-sm btn-danger" data-id="${producto.id}" onclick="borrarProducto(${producto.id})">Borrar</button></td>
  </tr>
    `;
    const json = JSON.stringify(productos); //los transforma en string
   localStorage.setItem('productos', json); //los sube a local storage
  });
}

/*funcion para editar producto

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
      <tr>
      <th class="text-center">${producto.id}</th>
      <td class="text-center">${producto.tipo}</td>
      <td class="text-center">${producto.marca}</td>
      <td class="text-center">${producto.modelo}</td>
      <td class="text-center">${producto.precio}</td>
      <td><button class="button-editar btm btn-sm btn-warning" data-id="${producto.id}" onclick="editarProducto(${producto.id})">Editar</button></td>
      <td><button class="button-borrar btm btn-sm btn-danger" data-id="${producto.id}" onclick="borrarProducto(${producto.id})">Borrar</button></td>
    </tr>
    `;
    });
  }
}

//funcion para agregar prodocto

const buttonAgregar = document.getElementById("button-agregar");

buttonAgregar.addEventListener("click", () => {
  const tipo = prompt("Ingrese el tipo de producto:");
  const marca = prompt("Ingrese la marca del producto:");
  const modelo = prompt("Ingrese el modelo del producto:");
  const precio = prompt("Ingrese el precio del producto:");
  const imagen = prompt("Ingrese la url de la imagen");

  const id = productos.length + 1;
  const nuevoProducto = {id, tipo, marca, modelo, precio, imagen};
  productos.push(nuevoProducto);

  tbody.innerHTML = "";
    productos.forEach((producto) => {
      tbody.innerHTML += `
      <tr>
      <th class="text-center">${producto.id}</th>
      <td class="text-center">${producto.tipo}</td>
      <td class="text-center">${producto.marca}</td>
      <td class="text-center">${producto.modelo}</td>
      <td class="text-center">${producto.precio}</td>
      <td><button class="button-editar btm btn-sm btn-warning" data-id="${producto.id}" onclick="editarProducto(${producto.id})">Editar</button></td>
      <td><button class="button-borrar btm btn-sm btn-danger" data-id="${producto.id}" onclick="borrarProducto(${producto.id})">Borrar</button></td>
    </tr>`})
})*/
