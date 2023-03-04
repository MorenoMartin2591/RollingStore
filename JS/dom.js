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
  {
    id: 09,
    tipo: "Celular",
    marca: "Xiaomi",
    modelo: "11T Pro",
    precio: 299.999,
  },
  { id: 10, tipo: "Celular", marca: "Xiaomi", modelo: "11T", precio: 256.999 },
  {
    id: 11,
    tipo: "Celular",
    marca: "Xiaomi",
    modelo: "Readmi Note 11",
    precio: 162.999,
  },
  {
    id: 12,
    tipo: "Accesorios",
    marca: "Xiaomi",
    modelo: "Kit Cámara Xiaomi 4K",
    precio: 145.999,
  },
  {
    id: 13,
    tipo: "Accesorios",
    marca: "Xiaomi",
    modelo: "Auriculares Inalambricos Xiaomi Buds 3T",
    precio: 72.099,
  },
  {
    id: 14,
    tipo: "Accesorios",
    marca: "Xiaomi",
    modelo: "Cargador Inalámbrico 20W",
    precio: 29.299,
  },
  {
    id: 15,
    tipo: "Accesorios",
    marca: "Samsung",
    modelo: "Auriculares Samsung Galaxy Pro",
    precio: 31.999,
  },
  {
    id: 16,
    tipo: "Accesorios",
    marca: "Samsung",
    modelo: "Smart Watch Samsung Galaxy 40 MM",
    precio: 29.119,
  },
];

/*Capturamos el elemento de la tabla*/
const cargGrup = document.querySelector(".card-group");
const tbody = document.querySelector("tbody");

productos.forEach((producto) => {
  tbody.innerHTML += `
  <tr>
    <th class="text-center">${producto.id}</th>
    <td class="text-center">${producto.tipo}</td>
    <td class="text-center">${producto.marca}</td>
    <td class="text-center">${producto.modelo}</td>
    <td class="text-center">${producto.precio}</td>
    <td><button class="button-editar btm btn-sm btn-warning">Editar</button></td>
    <td><button class="button-borrar btm btn-sm btn-danger onclick="quitarProductos(${productos.id})">Borra</button></td>
  </tr>
    `;
});

/*Recorro el array y genero un documento a insertar en el html*/
productos.forEach((producto) => {
  cargGrup.innerHTML += `
  <div class="col-3 m-1"> 
  <img src="../Multimedia/img-section/Celulares/Motorola/moto E32.webp" class="card-img-top border-bottom"
      alt="...">
  <div class="card-body">
      <h5 class="card-title text-center">${producto.marca} ${producto.modelo}</h5>
  </div>

  <div class="card-body d-flex justify-content-evenly">
      <div class="card-body-preciomt text-primary">
          <h5 class="card-title text-center">PRECIO MT</h5>
          <h5 class="card-title text-center">${producto.precio}</h5>
      </div>
  </div>

  <div class="card-body-button d-flex justify-content-evenly p-1">
      <button type="button" class="btn btn-primary col-5">COMPRAR</button>
      <button type="button" class="btn btn-secondary col-5">VER</button>
  </div>
</div>
    `;
});
