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
//Si viene la propiedad search con un parametro Muestro el getByID, sino Muestro el getALL
    processOptions(opcion: Opciones) {
        if (opcion.action == "search" && opcion.params) {
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