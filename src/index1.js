//import Persona from"./Persona.js";

//let separacionOperador = expresionInput.replace(/[a-zA-z0-9]/g,"");


//en esta parte importamos los archivos de boostrap que ya se encuentran de manera local
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from "sweetalert2";


//importamos o traemos a llmar a la calse acciones para trabajar con sus metodos
import Acciones from "./Acciones.js";
import Personaje from "./Personaje.js";

const btn_player1 = document.getElementById("btn_player1");
let pj1 = "", pj2 = "";
let jugador1, jugador2;

nombre1.addEventListener("input",(event) =>{
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9]+/,"");
});
nombre2.addEventListener("input",(event) =>{
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9]+/,"");
});

const btn_player2 = document.getElementById("btn_player2");

const remover_seleccion = (...elementos) =>{
    elementos.map((elemento)=>{
        elemento.classList.remove("bg-warning");
        elemento.classList.add("bg-danger")
    });

}
const remover_seleccion2 = (...elementos) =>{
    elementos.map((elemento)=>{
        elemento.classList.remove("bg-warning");
        elemento.classList.add("bg-primary")
    });

}


//creacion de unna constante la cual contiene todos los elementos referente al id "py1"
//document hace referencia al documento principal ( archivo html)
const player1 = document.getElementById("py1");
const player2 = document.getElementById("py2");


//aqui desempaquetamos lo que contiene una lista nodeList, creandolo en un arreglo 
//[] crea un arreglo 
// ... desempaqueta 
//se itera la funcion map el contenido del arreglo obtenido en el primer punto 
[...player1.querySelectorAll("img")].map((imagen) => {
    //mediante una variable auxiliar se asigna un evento click a cada imagen  con la funcion "addeventListener"
    //cada que aplicamos addlistener asignamos un evento, y cada que damos clic atrapamos ese evento y traemos la informacion
    imagen.addEventListener('click',(event)=>{
        //cuando da click a un elemento se accede a su variable la cual contiene todos los atributos del elemento clickeado
        //se obtiene el valor del atributo alt con target y el nombre del mismo
        //console.log(event.target.alt)
        //añadir una clase de fondo color amarillo 
        remover_seleccion(...player1.querySelectorAll("img"));
        event.target.classList.remove("bg-danger");
        //remove una clase de color rojo
        event.target.classList.add("bg-warning");
        pj1 = event.target.alt;
    });
});

[...player2.querySelectorAll("img")].map((imagen) => {
    imagen.addEventListener('click',(event) => {
        remover_seleccion2(...player2.querySelectorAll("img"));
        event.target.classList.remove("bg-primary");
        event.target.classList.add("bg-warning");
        pj2 = event.target.alt;
    })
})

btn_player1.addEventListener("click", () => {
    if(document.getElementById("player1").value == ""){
        Swal.fire({
            icon:"warning",
            title:"Error!",
            text:"El jugador no ha ingresado un nombre de usuario"
        })
        return;
    }else if(pj1 == ""){
        Swal.fire({
            icon:"warning",
            title:"Error!",
            text:"El jugador 1 debe seleccionar un personaje!"
        })
        return;
    }
    //esto se crea de manera global para poder manipular 
    jugador1 = new Acciones(document.getElementById("player1").value);
    document.getElementById("player1").disable = true;
    document.getElementById("py1").classList.add("d-none");
});

btn_player2.addEventListener("click", () => {
    if(document.getElementById("player2").value == ""){
        Swal.fire({
            icon:"warning",
            title:"Error!",
            text:"El jugador 2 no ha ingresado un nombre de usuario"
        })
        return;
    }else if(pj2 == ""){
        Swal.fire({
            icon:"warning",
            title:"Error!",
            text:"El jugador 2 debe seleccionar un personaje!"
        })
        return;
    }
    //esto se crea de manera global para poder manipular 
    jugador2 = new Acciones(document.getElementById("player2").value);
    document.getElementById("player2").disable = true;
    document.getElementById("py2").classList.add("d-none");
});


// let persona1 = new Index("Irving");
// //console.log(persona1.nombre);
// persona1.validarNombre("test");
// persona1.getNombre();
// persona1.setNombre("cambio");
// persona1.mostrarDatos();

//let persona1 = new Persona("Irving");
//persona1.mostrarDatos();


//creamos una nueva instancia de objeto para utilizar en acciones, con esto ya le podemos pasar parametros
//en este caso en particular a acciones le pasamos el parametro de nombre
//let pj1 = new Acciones("tester1");


//bajo el objeto, mandamos a llamar a los metodos de la clase acciones
//pj1.atkBasico();
//pj1.atkEspecial();
//pj1.cargaEnergia();