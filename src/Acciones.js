import Personaje from "./Personaje";



class Acciones extends Personaje{
    #turno = false;
    #contadorEspecial = 0;
    constructor(nombre, personaje){ 
        super(nombre, personaje);

    }
    getContadorEspecial(){
        return this.#contadorEspecial;
    }
    setContadorEspecial(valor){
        this.#contadorEspecial = Math.max(0, valor);
    }
    aumentarContadorEspecial(){
        this.#contadorEspecial++;
    }
    getSuTurno(){
        return this.#turno;
    }
    setSuTurno(turno){
        this.#turno = turno;
    }
    atkBasico(){
        this.setEnergia(this.pocentajeBarras(this.getEnergia() - 5));
        this.setKi(this.pocentajeBarras(this.getKi() - 10));
        this.mostrarEstadisticas();
        

    }
    atkEspecial(){
        this.setEnergia(this.pocentajeBarras(this.getEnergia() - 15));
        this.setKi(this.pocentajeBarras(this.getKi() - 20));
        this.mostrarEstadisticas();

    }
    curacion(){
        if(this.getSemilla() <= 0){
            return false;
        }

        this.setEnergia(100);
        this.setKi(100);
        this.setVida(100);
        
        this.setSemilla(this.getSemilla() - 1);

        this.mostrarEstadisticas();
        return true;
    }
    cargaEnergia(){
        this.setEnergia(this.pocentajeBarras(this.getEnergia() + 15));
        this.setKi(this.pocentajeBarras(this.getKi() + 10));
        this.mostrarEstadisticas();

    }
    defensa(){

    }
    pocentajeBarras(valor){
         return Math.max(0, Math.min(100, valor));
    }
    
}

export default Acciones;