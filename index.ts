import minimist from "minimist";
import { Opciones, ProductController } from "./controllers";

const parametros = minimist(process.argv.slice(2));

const asignarOpciones = (opc:any) =>{
    if(opc[1]){
        return {
            action: opc[1][0],
            params: opc[1][1]
        }
    }else{
        return {       
            action: "",
            params: 0
        }
    }
    
}
function main (){
    const arrayParametros = Object.entries(parametros)
    const parseado = asignarOpciones(arrayParametros)
    const prueba = new ProductController()

    prueba.contacts.load().then(data =>
        console.table(prueba.processOptions(parseado)))
    .catch(err => console.error("Elerror", err))
}
main()