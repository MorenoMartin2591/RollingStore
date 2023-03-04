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

const items = JSON.parse("items") || 

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
    <td class="text-center">$ ${producto.precio}</td>    
    <td><button class="button-editar btm btn-sm btn-warning">Editar</button></td>
    <td><button class="button-borrar btm btn-sm btn-danger">Borra</button></td>
  </tr>
    `;
});
