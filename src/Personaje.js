import Acciones from "./Acciones.js";

class Personaje{
    #vida = 100;
    #nombre;
    #ki = 100;
    #energia = 100;
    #semilla = 2;
    #personaje = "";

    constructor(nombre, personaje){
        this.#nombre = nombre;
        this.#personaje = personaje;
        this.mostrarEstadisticas();
    }

    mostrarEstadisticas(){
        console.log(`
            nombre:${this.#nombre}.
            ************************
            vida:${this.#vida},
            ki:${this.#ki},
            energia:${this.#energia},
            semilla:${this.#semilla},
            `);
        
    }

    getPersonaje(){
        return this.#personaje;
    }
    getVida(){
        return this.#vida;
    }
    getKi(){
        return this.#ki;
    }
    getEnergia(){
        return this.#energia;
    }
    getSemilla(){
        return this.#semilla;
    }
    getNombre(){
        return this.#nombre;
    }

    setVida(vida){
        this.#vida = vida;
    }
    setKi(ki){
        this.#ki = ki;
    }
    setEnergia(energia){
        this.#energia = energia;
    }
    setSemilla(semilla){
        this.#semilla = semilla;
    }
    PersonajeDerrotado(){
        return this.#vida === 0;
    }
}

export default Personaje;