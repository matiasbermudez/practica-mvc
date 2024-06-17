import { Product, ProductCollection } from "./models";

//TEST MODELS ADD, GETONE, GETALL

const test = new ProductCollection()
const persona0 = new Product(0, "Luffy")
const persona1 = new Product(1, "Zoro")
const persona2 = new Product(2, "Shanks")

//TESTADDONE
test.addOne(persona0.id, persona0.name)
test.addOne(persona1.id, persona1.name)
test.addOne(persona2.id, persona2.name)

//TESTGETALL
console.log(test.getAll())

//TESTGETONEBYID

console.log("Encontrado0: ",test.getById(0))
console.log("Encontrado1: ",test.getById(1))
