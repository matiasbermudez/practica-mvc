import *  as  jsonfile from 'jsonfile'

class Product {
    constructor(id: number = 0, name: string = "") {
        this.id = id;
        this.name = name
    }
    id: number = 0;
    name: string = "";
}

class ProductCollection {
    data: Product[] = []
    constructor(data: Product[] = []) {
        this.data = data
    }

    getAll() {
        return this.data
    }
    getById(id: number) {
        const encontrado = this.data.find((element) => {
            if (element.id === id) {
                return true
            } else {
                return false
            }
        })
        return encontrado
    }
    addOne(id: number, name: string) {
        const agregar = new Product(id, name)
        if (agregar.id != undefined && agregar.name != undefined) {
            this.data.push(agregar)
            console.log("Se Agrego Exitosamente")
        } else {
            console.log("Algunas de la prop es undefined: ", agregar)
        }
    }
    load() {
        const file = './carga.json'
        return jsonfile.readFile(file)
            .then(data => {
                this.data = data
                return data
            })
            .catch(err => {
                console.error("Algo Fallo: ", err)
                throw err
            })
    }
}

export {
    Product,
    ProductCollection
}