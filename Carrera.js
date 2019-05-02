import Jugador from "./Jugador.js"
import Probabilidad from "./Probabilidad.js"

class Carrera {

    constructor(casillas, noJugadores, nombres, content) {
        this._casillas = casillas
        this._jugadores = []
        this._dado = new Probabilidad()
        this._content = content
        this._content.innerHTML = ""

        for (let i = 0; i < noJugadores; i++) {
            let jugador = new Jugador(nombres[i])
            this._jugadores.push(jugador)
        }

    }

    get Dado() {
        return this._dado
    }

    get Jugadores() {
        return this._jugadores
    }

    get Casillas() {
        return this._casillas
    }

    turno(jugador) {
        console.log(`Turno del Jugador ${jugador.Nombre}.`)
        this._content.innerHTML += `Turno del Jugador ${jugador.Nombre}.<br>`

        let casillasAvanzar = this.Dado.obtenerDato()

        console.log(`El jugador ${jugador.Nombre} deberá avanzar ${casillasAvanzar} casillas.`)
        this._content.innerHTML += `El jugador ${jugador.Nombre} deberá avanzar ${casillasAvanzar} casillas.<br>`

        jugador.mover(casillasAvanzar)

        console.log(`Eljugador ${jugador.Nombre} ahora se encuentra en la casilla ${jugador.Posicion}`)
        this._content.innerHTML += `Eljugador ${jugador.Nombre} ahora se encuentra en la casilla ${jugador.Posicion}<br>`

        console.log(`---------------------------------------`)
        this._content.innerHTML += `---------------------------------------<br>`

    }

    ganador() {
        let ganadores = []

        this.Jugadores.forEach(jugador => {
            if (jugador.esGanador()) {
                ganadores.push(jugador)
            }
        })

        return ganadores
    }

    comenzar() {
        let terminado = false
        do {
            this.Jugadores.forEach(jugador => {
                this.turno(jugador)
                if (jugador.Posicion >= this.Casillas) {
                    jugador.Ganador = true
                    terminado = true
                }
            })
        } while (terminado == false)

        let ganadores = this.ganador()

        console.log("Ganadores:")
        this._content.innerHTML += "Ganadores:<br>"

        if (ganadores.length >= 2) {
            console.log("Hubo empate")
            this._content.innerHTML += "Hubo empate<br>"
        }

        ganadores.forEach(jugador => {
            console.log(jugador.Nombre)
            this._content.innerHTML += `${jugador.Nombre}<br>`
        });

    }

}

export default Carrera