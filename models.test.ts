import { Product, ProductCollection } from "./models";

//TEST MODELS ADD, GETONE, GETALL, LOAD



const test = new ProductCollection()
const persona6 = new Product(6, "Ace")
const persona7 = new Product(7, "Sabo")
const persona8 = new Product(8, "Nami")

//TEST LOAD
test.load().then(data => {
    console.log("Datos Cargados", data)

    //TESTADDONE
    test.addOne(persona6.id, persona6.name)
    test.addOne(persona7.id, persona7.name)
    test.addOne(persona8.id, persona8.name)
    //TESTGETONEBYID

    console.log("Encontrado0: ", test.getById(7))
    console.log("Encontrado1: ", test.getById(4))
    //TESTGETALL
    console.log(test.getAll())
})




