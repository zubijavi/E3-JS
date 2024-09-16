const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const pizzaForm = document.getElementById('pizzaForm');
const input = document.getElementById('input');


function mostrarPizza(pizza) {
  contenedorMostrarPizza.className = 'contenedorMostrarPizza'
  contenedorMostrarPizza.innerHTML = `
      <div class="detalles">
      <h2>${pizza.nombre}</h2>
      <p>Precio: $${pizza.precio}</p>
      <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
      </div>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
    `;
}

function cargarPizzaDesdeLocalStorage() {
  const pizzaGuardada = localStorage.getItem('ultimaPizza');
  if (pizzaGuardada) {
    const pizza = JSON.parse(pizzaGuardada); 
    mostrarPizza(pizza); 
  }
}

function guardarPizzaEnLocalStorage(pizza) {
  localStorage.setItem('ultimaPizza', JSON.stringify(pizza)); 
}

pizzaForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const pizzaBuscadaId = parseInt(document.getElementById('idPizza').value);

  if (isNaN(pizzaBuscadaId)) {
    contenedorMostrarPizza.innerHTML = `<p>Debe ingresar un número</p>`;
    return;
  }

  const pizzaBuscada = pizzas.find(pizza => pizza.id === pizzaBuscadaId);

  if (pizzaBuscada) {
    mostrarPizza(pizzaBuscada); 
    guardarPizzaEnLocalStorage(pizzaBuscada); 
  } else {
    contenedorMostrarPizza.innerHTML = `<p>No se encontró ninguna pizza con el ID ${pizzaBuscadaId}</p>`;
  }
  input.classList.add('enviado');
  
});

cargarPizzaDesdeLocalStorage();

