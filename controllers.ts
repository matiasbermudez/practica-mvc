import { ProductCollection } from "./models";

type Opciones = {
    action?: "search" | "agregar" | null;
    params: any
}
class ProductController {

    contacts: ProductCollection;
    constructor() {
        this.contacts = new ProductCollection()
        this.contacts.load()
    }

    processOptions(opcion: Opciones) {
        console.log(opcion.action)
        console.log(opcion.params)
        if (opcion.action == "search" && opcion.params) {
            console.log("Ingreso bien por que es serch", opcion.action)
            return this.contacts.getById(opcion.params)
        } else {
            return this.contacts.getAll()
        }
    }
}

export {
    Opciones,
    ProductController
}