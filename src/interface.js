import { width } from "@fortawesome/free-brands-svg-icons/fa11ty";
import { msj_error } from ".";
import Swal from "sweetalert2";

const atributosPersonaje = {
    "Goku": {
        atk_basico: "¡Toma esto!",
        atk_especial: "¡Ka... me... ha... me... ¡¡HA!!",
        recarga_energia: "¡Aaaaaah, el poder está aumentando!",
        semilla: "¡Gracias, una semilla del ermitaño!",
        fondo: "rgb(252, 131, 25, 0.7)"
    },
    "Veguito": {
        atk_basico: "¡¿Qué pasa?! ¡No me digas que este es todo tu poder!",
        atk_especial: "¡Este es el auténtico Vegito! ... ¡¡Y aquí está el golpe final!!",
        recarga_energia: "¡Je, esto apenas comienza!",
        semilla: "¡Excelente, recuperé mis fuerzas!",
        fondo: "rgb(252, 243, 53, 0.7)"
    },
    "Gohan": {
        atk_basico: "¡Haaaa!",
        atk_especial: "¡Ya no... voy a perdonarte!",
        recarga_energia: "¡Tengo que concentrarme!",
        semilla: "¡Muchas gracias!",
        fondo: "rgb(142, 25, 252, 0.7)"
    },
    "Trunks": {
        atk_basico: "¡Es inútil que te defiendas!",
        atk_especial: "¡Este será tu fin! ¡No quedará ni un solo átomo de ti!... ¡MUERE!",
        recarga_energia: "¡Aumentando energía al máximo!",
        semilla: "¡Esto me ayudará a continuar!",
        fondo: "rgb(32, 208, 247, 0.7)"
    }, 
    "Veguetta": {
        atk_basico: "¡No eres más que un insecto!",
        atk_especial: "¡Observa el verdadero poder de un guerrero de clase alta! ¡¡Cañón Gaaalick!!",
        recarga_energia: "¡Insectos, verán mi verdadero poder!",
        semilla: "¡Hmph, una simple semilla...",
        fondo: "rgb(7, 196, 238, 0.7)"
    },
    "Cell": {
        atk_basico: "¿Eso es todo lo que tienes?",
        atk_especial: "¡Te demostraré mi poder destructivo!",
        recarga_energia: "¡Mi perfección se eleva!",
        semilla: "¡Esto es fascinante!",
        fondo: "rgb(247, 32, 183, 0.7)"
    },
    "Pikoro": {
        atk_basico: "¿Eso es todo lo que tienes?",
        atk_especial: "¡Hasta luego, enano!",
        recarga_energia: "¡Concentración absoluta!",
        semilla: "Bien, esto servirá.",
        fondo: "rgb(59, 207, 31, 0.7)"
    },
    "Gogueta": {
        atk_basico: "¡No soy Goku ni Vegeta! ¡Soy el encargado de acabar contigo!",
        atk_especial: "¡A ver si puedes sobrevivir a esto! ¡Fuerza máxima!",
        recarga_energia: "¡El poder fluye en mí!",
        semilla: "¡Esto me devolverá todas las fuerzas!",
        fondo: "rgb(247, 32, 39, 0.7)" 
    }
};

const finalizarTurno = (j1, j2) => {
    let turnosActuales = j1.getContadorEspecial();
    if (turnosActuales > 0) {
        j1.setContadorEspecial(turnosActuales - 1);
    }
    if (evaluarFinJuego(j1, j2)) return;

    j1.setSuTurno(false);
    j2.setSuTurno(true);
};

const evaluarFinJuego = (j1, j2) => {
    if (j1.getVida() <= 0 || j2.getVida() <= 0) {
        const ganador = j1.getVida() <= 0 ? j2 : j1;
        
        Swal.fire({
            title: "¡Fin del Combate!",
            text: `¡${ganador.getNombre()} (${ganador.getPersonaje()}) ha ganado la pelea!`,
            icon: "success",
            confirmButtonText: "Reiniciar",
            allowOutsideClick: false
        }).then(() => {
            location.reload();
        });
        return true;
    }
    return false;
};

const atk_basico = (j1, j2) => {
    j1.atkBasico();
    j2.setVida((j2.getVida()-10) < 1 ? 0 : j2.getVida()-10);
    Swal.fire({
        text: atributosPersonaje[j1.getPersonaje()].atk_basico,
        imageUrl: `./public/Img/${j1.getPersonaje()}/basico.png`,
        imageWidth: 300,
        imageHeight: 300,
        position: "center-center",
        width: 600,
        color: "#fff",
        background: "none",
        imageAlt: "Ataque Basico",
        backdrop: atributosPersonaje[j1.getPersonaje()].fondo,
        showConfirmButton: false,
        timer: 1500
    });
    finalizarTurno(j1, j2);
};

const atk_especial = (j1, j2) => {
    if (j1.getContadorEspecial() <= 0) {
        j1.setContadorEspecial(2);
        j1.atkEspecial();
        j2.setVida(Math.max(0, j2.getVida() - 20));

        Swal.fire({
            text: atributosPersonaje[j1.getPersonaje()].atk_especial,
            imageUrl: `./public/Img/${j1.getPersonaje()}/especial.png`,
            imageWidth: 300,
            imageHeight: 300,
            position: "center",
            width: 600,
            color: "#fff",
            background: "none",
            imageAlt: "Ataque Especial",
            backdrop: atributosPersonaje[j1.getPersonaje()].fondo,
            showConfirmButton: false,
            timer: 1500
        });

        finalizarTurno(j1, j2);
    } else {
        msj_error(`Tienes que esperar ${j1.getContadorEspecial()} turnos para poder usar el atk Especial`);
    }
};

const recarga_energia = (j1, j2) => {
    if (j1.getEnergia() < 100 || j1.getKi() < 100) {
        j1.cargaEnergia();
        
        Swal.fire({
            text: atributosPersonaje[j1.getPersonaje()].recarga_energia,
            imageUrl: `./public/Img/${j1.getPersonaje()}/energia.png`,
            imageWidth: 300,
            imageHeight: 300,
            position: "center-center",
            width: 600,
            color: "#fff",
            background: "none",
            imageAlt: "Recarga Energia",
            backdrop: atributosPersonaje[j1.getPersonaje()].fondo,
            showConfirmButton: false,
            timer: 1500
        });
        finalizarTurno(j1, j2);
    } else {
        msj_error('Tu energia y Ki estan completas');
    }
};

const semilla = (j1, j2) => {
    if (j1.getSemilla() <= 0) {
        Swal.fire({ text: "No tienes mas semillas" });
        return;
    }
    if (j1.getVida() >= 80) {
        Swal.fire({ text: "Solo puedes utilizar una semilla cuando tu vida sea menor al 80%" });
        return;
    }

    j1.curacion();
    
    Swal.fire({
        text: atributosPersonaje[j1.getPersonaje()].semilla,
        imageUrl: `./public/Img/${j1.getPersonaje()}/curar.png`,
        imageWidth: 300,
        imageHeight: 300,
        position: "center-center",
        width: 600,
        color: "#fff",
        background: "none",
        imageAlt: "Semilla",
        backdrop: atributosPersonaje[j1.getPersonaje()].fondo,
        showConfirmButton: false,
        timer: 1500
    });
    finalizarTurno(j1, j2);
};

export { atk_basico, atk_especial, recarga_energia, semilla };