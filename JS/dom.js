const productos = [
  { id: 01, tipo: "Celular", marca: "Motorola", modelo: "E32", precio: 46.045 },
  { id: 02, tipo: "Celular", marca: "Motorola", modelo: "E22", precio: 46.045 },
  // {
  //   id: 03,
  //   tipo: "Celular",
  //   marca: "Motorola",
  //   modelo: "E22i",
  //   precio: 42.542,
  // },
  // { id: 04, tipo: "Celular", marca: "Motorola", modelo: "EG32", precio: 70.57 },
  // {
  //   id: 05,
  //   tipo: "Celular",
  //   marca: "Samsung",
  //   modelo: "Galaxy A03",
  //   precio: 42.542,
  // },
  // {
  //   id: 06,
  //   tipo: "Celular",
  //   marca: "Samsung",
  //   modelo: "Galaxy A53",
  //   precio: 150.149,
  // },
  // {
  //   id: 07,
  //   tipo: "Celular",
  //   marca: "Samsung",
  //   modelo: "Galaxy A22",
  //   precio: 83.583,
  // },
  // {
  //   id: 08,
  //   tipo: "Celular",
  //   marca: "Samsung",
  //   modelo: "Galaxy A13",
  //   precio: 56.055,
  // },
  // {
  //   id: 09,
  //   tipo: "Celular",
  //   marca: "Xiaomi",
  //   modelo: "11T Pro",
  //   precio: 299.999,
  // },
  // { id: 10, tipo: "Celular", marca: "Xiaomi", modelo: "11T", precio: 256.999 },
  // {
  //   id: 11,
  //   tipo: "Celular",
  //   marca: "Xiaomi",
  //   modelo: "Readmi Note 11",
  //   precio: 162.999,
  // },
  // {
  //   id: 12,
  //   tipo: "Accesorios",
  //   marca: "Xiaomi",
  //   modelo: "Kit Cámara Xiaomi 4K",
  //   precio: 145.999,
  // },
  // {
  //   id: 13,
  //   tipo: "Accesorios",
  //   marca: "Xiaomi",
  //   modelo: "Auriculares Inalambricos Xiaomi Buds 3T",
  //   precio: 72.099,
  // },
  // {
  //   id: 14,
  //   tipo: "Accesorios",
  //   marca: "Xiaomi",
  //   modelo: "Cargador Inalámbrico 20W",
  //   precio: 29.299,
  // },
  // {
  //   id: 15,
  //   tipo: "Accesorios",
  //   marca: "Samsung",
  //   modelo: "Auriculares Samsung Galaxy Pro",
  //   precio: 31.999,
  // },
  // {
  //   id: 16,
  //   tipo: "Accesorios",
  //   marca: "Samsung",
  //   modelo: "Smart Watch Samsung Galaxy 40 MM",
  //   precio: 29.119,
  // },
];

//Funcion para Guardar en LocalStorage//

function guardarProductoslocal() {
  if (JSON.parse(localStorage.getItem("productosLocal")) == null) {
    const json = JSON.stringify(productos);
    localStorage.setItem("productosLocal", json);
  }
}

guardarProductoslocal();

function leerProductoslocal() {
  const itemLocal = JSON.parse(localStorage.getItem("productosLocal"));
  console.log(itemLocal);
}

leerProductoslocal();

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
});

function borrarProducto(id) {
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
  });
}

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

const buttonAgregar = document.getElementById("button-agregar");

buttonAgregar.addEventListener("click", () => {
  const tipo = prompt("Ingrese el tipo de producto:");
  const marca = prompt("Ingrese la marca del producto:");
  const modelo = prompt("Ingrese el modelo del producto:");
  const precio = prompt("Ingrese el precio del producto:");
  const id = productos.length + 1;
  const nuevoProducto = { id, tipo, marca, modelo, precio };
  productos.push(nuevoProducto);
  localStorage.setItem("productosLocal", JSON.stringify(productos));
  tbody.innerHTML += `
    <tr>
      <th class="text-center">${id}</th>
      <td class="text-center">${tipo}</td>
      <td class="text-center">${marca}</td>
      <td class="text-center">${modelo}</td>
      <td class="text-center">${precio}</td>
      <td><button class="button-editar btm btn-sm btn-warning">Editar</button></td>
      <td><button class="button-borrar btm btn-sm btn-danger" data-id="${id}">Borrar</button></td>
    </tr>
  `;
});
