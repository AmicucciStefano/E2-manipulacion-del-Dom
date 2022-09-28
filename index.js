/* Objeto de pizzas */
let Pizzas = [
    {
        id: 1,
        nombre:"Mozzarella",
        imagen:"./img/pizza-mozzarella.jpg",
        ingredientes: ["Salsa", " Mozzarella", " Oregano"],
        precio: 800
    },
    {
        id: 2,
        nombre:"4 quesos",
        imagen:"./img/pizza-cuatro-quesos.jpg",
        ingredientes: ["Mozzarella", " Roquefort", " Parmesano", " Fontina"],
        precio: 950
    },
    {
        id: 3,
        nombre:"Napolitana",
        imagen:"./img/pizza-napolitana.jpg",
        ingredientes: ["Salsa", " Mozzarella", " tomate en rodajas", " Oregano"],
        precio: 500
    },
    {
        id: 4,
        nombre:"Fugazzetta",
        imagen:"./img/pizza-fugazzeta.jpg",
        ingredientes: ["Mozzarella", " cebolla salteada"],
        precio: 900
    },
    {
        id: 5,
        nombre:"JyM",
        imagen:"./img/pizza-jamon-y-morron.jpg",
        ingredientes: ["Salsa", " Mozzarella", " Jamon", " Morrones asados", " Oregano"],
        precio: 850
    },
    {
        id: 6,
        nombre:"Longaniza",
        imagen:"./img/pizza-longaniza.jpg",
        ingredientes: ["Salsa", " Mozzarella", " longaniza feteada"],
        precio: 1000
    }
]   

/* Elementos necesarios */
const divCard = document.querySelector(".div-card")
const button = document.querySelector(".button")
const input = document.querySelector(".input")
const erorrMessage = document.querySelector(".errormessage");

let pizzaAnterior = JSON.parse(localStorage.getItem("pizza")) || [];

const saveLocalStorage = () => {
    localStorage.setItem('pizza', JSON.stringify(pizzaAnterior))
};
/* guardo la pizza en un objeto */
const savePizza = (pizza) => {
    pizzaAnterior = 
    {
        id: pizza.id + 1,
        nombre: pizza.nombre,
        imagen:pizza.imagen,
        precio:pizza.precio,
        ingredientes:pizza.ingredientes
    }
}    

/* event listener */
button.addEventListener("click", function() {
    PizzaValidation()
})

/* cantidad de pizzas */
let numberOfPizzas = Pizzas.length;
/* declaro pizza para poder usarla globalmente para poder invocarla en otras funciones fuera de pizzaValidation*/
let pizza;

/* Funcion para verificar si hay algun numero o si el numero sobrepasa el id */
function PizzaValidation() {
    let number = Number(input.value);
    if(number > numberOfPizzas || number < 0){
        showError("Numero invalido, Por favor ingrese otro valor")
        input.classList.add("inputerror")
        divCard.classList.add("hide")
        divCard.innerHTML=""
        return
    } else if (input.value === ""){
        showError("Escribe un numero, por favor")
        input.classList.add("inputerror")
    }
    else {
        pizza = Pizzas.find((pizza) => {return pizza.id === number})
        console.log(pizza);
        savePizza(pizza);
        saveLocalStorage();
        divCard.classList.remove("hide")
        input.classList.remove("inputerror")
        erorrMessage.innerHTML = "";
        renderPizza(pizza)
    }
}

const renderPizza = (pizza) => {
    divCard.innerHTML=
    `
    <img src=${pizza.imagen} class="card-img-top" style="height:190px" alt=${pizza.nombre}>
        <div class="card-body">
            <h2 class="card-title">${pizza.nombre}</h2>
            <h4 class="card-subtitle mb-2 text-muted">$${pizza.precio}</h4>
            <p class="card-text">Ingredientes: ${pizza.ingredientes}</p>
        </div>
    `
}

/* funcion para Mostrar el error */
const showError = (frase) => {
    erorrMessage.innerHTML = `*${frase}`;
}

function init() {
    divCard.classList.remove("hide")
    renderPizza(pizzaAnterior)
}
init()