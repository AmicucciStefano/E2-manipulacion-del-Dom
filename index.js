/* Objeto de pizzas */
let Pizzas = [
    {
        id: 1,
        nombre:"Mozzarella",
        ingredientes: ["Salsa", " Mozzarella", " Oregano"],
        precio: 800
    },
    {
        id: 2,
        nombre:"4 quesos",
        ingredientes: ["Mozzarella", " Roquefort", " Parmesano", " Fontina"],
        precio: 950
    },
    {
        id: 3,
        nombre:"Napolitana",
        ingredientes: ["Salsa", " Mozzarella", " tomate en rodajas", " Oregano"],
        precio: 500
    },
    {
        id: 4,
        nombre:"Fugazzetta",
        ingredientes: ["Mozzarella", " cebolla salteada"],
        precio: 900
    },
    {
        id: 5,
        nombre:"JyM",
        ingredientes: ["Salsa", " Mozzarella", " Jamon", " Morrones asados", " Oregano"],
        precio: 850
    },
    {
        id: 6,
        nombre:"Longaniza",
        ingredientes: ["Salsa", " Mozzarella", " longaniza feteada"],
        precio: 1000
    }
]   
/* Elementos necesarios */
const nombre = document.querySelector(".h2")
const descripcion = document.querySelector(".h4")
const button = document.querySelector(".button")
const input = document.querySelector(".input")
const erorrMessage = document.querySelector(".errormessage");
/* event listener */
button.addEventListener("click", function() {
    renderPizza()
    
})

/* cantidad de pizzas */
let numberOfPizzas = Pizzas.length;

/* Funcion para renderizar */
function renderPizza() {
    let number = Number(input.value);
    if(number > numberOfPizzas || number < 0){
        showError("Numero invalido, Por favor ingrese otro valor")
        input.classList.add("inputerror")
        nombre.innerHTML = "";
        descripcion.innerHTML = "";
        return
    }
    else {
        const pizza = Pizzas.filter((pizza) => {return pizza.id === number})
        const precio = pizza[0].precio;
        input.classList.remove("inputerror")
        erorrMessage.innerHTML = ""
        nombre.innerHTML = `${pizza[0].nombre}`;
        descripcion.innerHTML = `Precio : $${precio}`;
    }

}

/* funcion para Mostrar el error */
const showError = (frase) => {
    erorrMessage.innerHTML = `*${frase}`;
}