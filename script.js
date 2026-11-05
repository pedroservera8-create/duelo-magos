// PARTE IDs
const empezar = document.querySelector("#start");
const contenedor = document.querySelector('.contenedor-tablas')
const principio = document.querySelector("#empezar")
const atacar = document.querySelector('#ataque');
const atacar2 = document.querySelector('#atacar2');
const atacar3 = document.querySelector('#atacar3');
const pasar = document.querySelector('#pasar');
const pasar2 = document.querySelector('#pasar2');
const pasar3 = document.querySelector('#pasar3');
const desplegable = document.querySelector('#desplegable')
let valor = desplegable.value;
const desplegable2 = document.querySelector('#desplegable2')
const desplegable3 = document.querySelector('#desplegable3')
let NumeroAleatorio;
let elegir = document.querySelector('#elegir')
let elegir2 = document.querySelector('#elegir2')
let elegir3 = document.querySelector('#elegir3')

let vivo1 = true;
let vivo2 = true;
let vivo3 = true;

const boton = document.getElementById('button');
boton.style.display = 'none';

boton.addEventListener('click', () => {
        document.getElementById('vivo').textContent = "Vivo";
        document.getElementById('vivo2').textContent = "Vivo";
        document.getElementById('vivo3').textContent = "Vivo";
        document.getElementById("atacar2").disabled = false;
        document.getElementById("pasar2").disabled = false;
        document.getElementById("ataque").disabled = false;
        document.getElementById("pasar").disabled = false;
        document.getElementById("atacar3").disabled = false;
        document.getElementById("pasar3").disabled = false;
        boton.style.display = 'none';

}

)

pasar2.disabled = true;
pasar3.disabled = true;
atacar2.disabled = true;
atacar3.disabled = true;

let numero = 0; // SI EL NÚMERO LLEGA A 2, SE ACABA EL JUEGO JEJEJEE

function comprobarFin() {
    if (numero >= 2) {
        document.getElementById('titulo').textContent = "Juego acabado";
        boton.style.display = 'flex';
        document.getElementById("atacar2").disabled = true;
        document.getElementById("pasar2").disabled = true;
        document.getElementById("ataque").disabled = true;
        document.getElementById("pasar").disabled = true;
        document.getElementById("atacar3").disabled = true;
        document.getElementById("pasar3").disabled = true;
    }
}

// LÓGICA: SI UNO MUERE SE BLOQUEAN SUS BOTONES Y SE QUITA SU OPCIÓN, SUMA 1 Y SOLO QUEDAN 2

// FUNCIONES BOTONES
empezar.addEventListener('click', () => {
    contenedor.style.display = 'flex';
    principio.style.display = 'none';
})

atacar2.addEventListener('click', () => {
    let eleccion2 = elegir2.value
    if (eleccion2 == 'jugador1') { // SI ATACA A JUGADOR 1

        let valor2 = desplegable2.value;
        NumeroAleatorio = Math.floor(Math.random() * 10) + 1;
        console.log(NumeroAleatorio)
        if (valor2 === 'cincuenta') {
            if (NumeroAleatorio <= 5) {
                document.getElementById('vivo').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                vivo1 = false;
                numero++;
            }
        }
        else if (valor2 === 'sesenta') {
            if (NumeroAleatorio <= 6) {
                document.getElementById('vivo').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                vivo1 = false;
                numero++;
            }
        }
        else if (valor2 === 'noventa') {
            if (NumeroAleatorio <= 9) {
                document.getElementById('vivo').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                vivo1 = false;
                numero++;
            }
        }
        if (vivo3 == true) {
            document.getElementById("atacar2").disabled = true;
            document.getElementById("pasar2").disabled = true;
            document.getElementById("ataque").disabled = true;
            document.getElementById("pasar").disabled = true;
            document.getElementById("atacar3").disabled = false;
            document.getElementById("pasar3").disabled = false;
        }
        else if (vivo1 == true) {
            document.getElementById("atacar2").disabled = true;
            document.getElementById("pasar2").disabled = true;
            document.getElementById("atacar3").disabled = true;
            document.getElementById("pasar3").disabled = true;
            document.getElementById("ataque").disabled = false;
            document.getElementById("pasar").disabled = false;
        }
        comprobarFin();

    }
    else if (elegir2.value == 'jugador3') { // SI ATACA A JUGADOR3
        let valor2 = desplegable2.value;
        NumeroAleatorio = Math.floor(Math.random() * 10) + 1;
        console.log(NumeroAleatorio)
        if (valor2 === 'cincuenta') {
            if (NumeroAleatorio <= 5) {
                document.getElementById('vivo3').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                vivo3 = false;
                numero++;
            }
        }
        else if (valor2 === 'sesenta') {
            if (NumeroAleatorio <= 6) {
                document.getElementById('vivo3').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                vivo3 = false;
                numero++;
            }
        }
        else if (valor2 === 'noventa') {
            if (NumeroAleatorio <= 9) {
                document.getElementById('vivo3').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                vivo3 = false;
                numero++;
            }
        }
        if (vivo3 == false) {
            document.getElementById("atacar2").disabled = true;
            document.getElementById("pasar2").disabled = true;
            document.getElementById("ataque").disabled = false;
            document.getElementById("pasar").disabled = false;
            document.getElementById("atacar3").disabled = true;
            document.getElementById("pasar3").disabled = true;
        }
        else {
            document.getElementById("atacar2").disabled = true;
            document.getElementById("pasar2").disabled = true;
            document.getElementById("ataque").disabled = true;
            document.getElementById("pasar").disabled = true;
            document.getElementById('atacar3').disabled = false;
            document.getElementById('pasar3').disabled = false;
        }
        comprobarFin();
    }

}
)

atacar.addEventListener('click', () => {
    let eleccion = elegir.value;
    if (eleccion == 'jugador2') { // SI ATACA A JUGADOR2
        let valor = desplegable.value;
        NumeroAleatorio = Math.floor(Math.random() * 10) + 1;
        console.log(NumeroAleatorio)
        if (valor === 'sesenta') {
            if (NumeroAleatorio <= 6) {
                document.getElementById('vivo2').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                document.getElementById("atacar3").disabled = false;
                document.getElementById("pasar3").disabled = false;
                vivo2 = false;
                numero++;
            }
        }
        else if (valor === 'ochenta') {
            if (NumeroAleatorio <= 8) {
                document.getElementById('vivo2').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                document.getElementById("atacar3").disabled = false;
                document.getElementById("pasar3").disabled = false;
                vivo2 = false;
                numero++;
            }
        }
        else if (valor === 'cien') {
            if (NumeroAleatorio <= 10) {
                document.getElementById('vivo2').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                document.getElementById("atacar3").disabled = false;
                document.getElementById("pasar3").disabled = false;
                vivo2 = false;
                numero++;
            }
        }
        if (vivo2 == true) {
            document.getElementById("ataque").disabled = true;
            document.getElementById("pasar").disabled = true;
            document.getElementById("atacar2").disabled = false;
            document.getElementById("pasar2").disabled = false;
        }
        comprobarFin();
    }
    else if (eleccion == 'jugador3') { // SI ATACA A JUGADOR3
        let valor = desplegable.value;
        NumeroAleatorio = Math.floor(Math.random() * 10) + 1;
        console.log(NumeroAleatorio)
        if (valor === 'sesenta') {
            if (NumeroAleatorio <= 6) {
                document.getElementById('vivo3').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                vivo3 = false;
                numero++;
            }
        }
        else if (valor === 'ochenta') {
            if (NumeroAleatorio <= 8) {
                document.getElementById('vivo3').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                vivo3 = false;
                numero++;
            }
        }
        else if (valor === 'cien') {
            if (NumeroAleatorio <= 10) {
                document.getElementById('vivo3').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                vivo3 = false;
                numero++;
            }
        }
        if (vivo2 == true) {
            document.getElementById("ataque").disabled = true;
            document.getElementById("pasar").disabled = true;
            document.getElementById("atacar2").disabled = false;
            document.getElementById("pasar2").disabled = false;
        }
        else if (vivo3 == true) {
            document.getElementById("ataque").disabled = true;
            document.getElementById("pasar").disabled = true;
            document.getElementById("atacar3").disabled = false;
            document.getElementById("pasar3").disabled = false;
        }
        comprobarFin();
    }

}
)

atacar3.addEventListener('click', () => {
    let eleccion3 = elegir3.value
    if (eleccion3 == 'jugador1') { // SI ATACA A JUGADOR 1

        let valor3 = desplegable3.value;
        NumeroAleatorio = Math.floor(Math.random() * 10) + 1;
        console.log(NumeroAleatorio)
        if (valor3 === 'cuarenta') {
            if (NumeroAleatorio <= 4) {
                document.getElementById('vivo').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = true;
                vivo1 = false;
                numero++;
            }
        }
        else if (valor3 === 'cincuenta') {
            if (NumeroAleatorio <= 5) {
                document.getElementById('vivo').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = true;
                vivo1 = false;
                numero++;
            }
        }
        else if (valor3 === 'setenta') {
            if (NumeroAleatorio <= 7) {
                document.getElementById('vivo').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("ataque").disabled = true;
                document.getElementById("pasar").disabled = true;
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = true;
                vivo1 = false;
                numero++;
            }
        }
        if (vivo1 == true) {
            document.getElementById("atacar3").disabled = true;
            document.getElementById("pasar3").disabled = true;
            document.getElementById("atacar2").disabled = true;
            document.getElementById("pasar2").disabled = true;
            document.getElementById("ataque").disabled = false;
            document.getElementById("pasar").disabled = false;
        }
        else if (vivo2 == true) {
            document.getElementById("atacar3").disabled = true;
            document.getElementById("pasar3").disabled = true;
            document.getElementById("ataque").disabled = true;
            document.getElementById("pasar").disabled = true;
            document.getElementById("atacar2").disabled = false;
            document.getElementById("pasar2").disabled = false;
        }
        comprobarFin();

    }
    else if (eleccion3 == 'jugador2') { // SI ATACA A JUGADOR2
        let valor3 = desplegable3.value;
        NumeroAleatorio = Math.floor(Math.random() * 10) + 1;
        console.log(NumeroAleatorio)
        if (valor3 === 'cuarenta') {
            if (NumeroAleatorio <= 4) {
                document.getElementById('vivo2').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = true;
                vivo2 = false;
                numero++;
            }
        }
        else if (valor3 === 'cincuenta') {
            if (NumeroAleatorio <= 5) {
                document.getElementById('vivo2').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = true;
                vivo2 = false;
                numero++;
            }
        }
        else if (valor3 === 'setenta') {
            if (NumeroAleatorio <= 7) {
                document.getElementById('vivo2').textContent = "Muerto";
                console.log("Has ganado");
                document.getElementById("atacar2").disabled = true;
                document.getElementById("pasar2").disabled = true;
                document.getElementById("atacar3").disabled = true;
                document.getElementById("pasar3").disabled = true;
                vivo2 = false;
                numero++;
            }
        }
        if (vivo1 == true) {
            document.getElementById("atacar3").disabled = true;
            document.getElementById("pasar3").disabled = true;
            document.getElementById("atacar2").disabled = true;
            document.getElementById("pasar2").disabled = true;
            document.getElementById("ataque").disabled = false;
            document.getElementById("pasar").disabled = false;
        }
        else if (vivo2 == true) {
            document.getElementById("atacar3").disabled = true;
            document.getElementById("pasar3").disabled = true;
            document.getElementById("ataque").disabled = true;
            document.getElementById("pasar").disabled = true;
            document.getElementById("atacar2").disabled = false;
            document.getElementById("pasar2").disabled = false;
        }
        comprobarFin();
    }

}
)

pasar.addEventListener('click', () => {
    if (vivo2 == true) {
        document.getElementById("ataque").disabled = true;
        document.getElementById("pasar").disabled = true;
        document.getElementById("atacar2").disabled = false;
        document.getElementById("pasar2").disabled = false;
    }
    else {
        document.getElementById("ataque").disabled = true;
        document.getElementById("pasar").disabled = true;
        document.getElementById("atacar2").disabled = true;
        document.getElementById("pasar2").disabled = true;
        document.getElementById("atacar3").disabled = false;
        document.getElementById("pasar3").disabled = false;

    }
})

pasar2.addEventListener('click', () => {
    if (vivo3 == true) {
        document.getElementById("atacar2").disabled = true;
        document.getElementById("pasar2").disabled = true;
        document.getElementById("ataque").disabled = true;
        document.getElementById("pasar").disabled = true;
        document.getElementById("atacar3").disabled = false;
        document.getElementById("pasar3").disabled = false;
    }
    else {
        document.getElementById("atacar2").disabled = true;
        document.getElementById("pasar2").disabled = true;
        document.getElementById("ataque").disabled = false;
        document.getElementById("pasar").disabled = false;
        document.getElementById("atacar3").disabled = true;
        document.getElementById("pasar3").disabled = true;
    }
})

pasar3.addEventListener('click', () => {
    if (vivo1 == true) {
        document.getElementById("atacar2").disabled = true;
        document.getElementById("pasar2").disabled = true;
        document.getElementById("ataque").disabled = false;
        document.getElementById("pasar").disabled = false;
        document.getElementById("atacar3").disabled = true;
        document.getElementById("pasar3").disabled = true;
    }
    else {
        document.getElementById("atacar2").disabled = false;
        document.getElementById("pasar2").disabled = false;
        document.getElementById("ataque").disabled = true;
        document.getElementById("pasar").disabled = true;
        document.getElementById("atacar3").disabled = true;
        document.getElementById("pasar3").disabled = true;
    }
})