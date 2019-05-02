import Carrera from "./Carrera.js"

document.getElementById('formCarrera').onsubmit = e => {
    e.preventDefault()

    let div = document.getElementById('carrera')

    let nombreJ1 = document.getElementById('jugador1').value
    let nombreJ2 = document.getElementById('jugador2').value

    let nombres = [nombreJ1, nombreJ2]

    let carrera = new Carrera(100, 2, nombres, div)

    carrera.comenzar()

}