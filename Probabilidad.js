class Probabilidad {

    constructor() {
        this._datos = [1, -1, 2, 2, 3]
    }

    obtenerDato() {
        let indice = Math.floor(Math.random() * (this._datos.length))
        return this._datos[indice]
    }

}

export default Probabilidad