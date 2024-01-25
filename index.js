const numero1 = 1
const numero2 = 2


//suma de 1 y 2 

console.log(numero1 + numero2)

const sumando = numero1 + numero2

console.log(`La suma de ${numero1} y ${numero2} es ${sumando}`)
//const edad = window.prompt('Dime tu edad')
//console.log(edad)
//console.log(typeof edad)


/*
Datos: 
  España: 96, 108 y 89. 
  Francia 88, 91 y 110.
*/

const puntuacionesFrancia = [88, 91, 110]
const puntuacionesEspaña = [96, 108, 89]

function calcularMedia(puntuacionesPais) {
    // operaciones para calcular media
    let totalPuntuacion = 0
    for (let i = 0; i < puntuacionesPais.length; i++) {
    // totalPuntuacion = totalPuntuacion + puntuacionesPais[i]
        totalPuntuacion += puntuacionesPais[i]
    }
    const media = totalPuntuacion / puntuacionesPais.length
    console.log(media)
    return media
}

function mostrarGanador() {
    // operaciones para determinar ganador
    const mediaFrancia = calcularMedia(puntuacionesFrancia)
    const mediaEspaña = calcularMedia(puntuacionesEspaña)

    if (mediaFrancia > mediaEspaña) {
        console.log('Gana Francia')
    } else if (mediaEspaña > mediaFrancia) {
        console.log('Gana España')
    } else {
        console.log('Empate')
    }
}

mostrarGanador()