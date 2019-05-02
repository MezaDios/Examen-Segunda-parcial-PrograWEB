class Jugador {

    constructor(nombre) {
        this._nombre = nombre
        this._posicion = 0
        this._ganador = false
    }

    get Nombre() {
        return this._nombre
    }

    get Posicion() {
        return this._posicion
    }

    set Ganador(ganador) {
        this._ganador = ganador
    }

    mover(cantidad) {
        this._posicion += cantidad
        return this._posicion
    }

    esGanador() {
        return this._ganador
    }

}

export default Jugador