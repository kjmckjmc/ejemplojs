//operaciones aritmeticas
function sumar(){
//recibir los datos
let numeroU = parseInt(document.getElementById("nUno").value)
let numeroD = parseInt(document.getElementById("nDos").value)

//procesar los datos
let resultadoSuma = parseInt(numeroU + numeroD)

//entregar los resultados
document.getElementById("resulOperacion").innerHTML = resultadoSuma

}
function multiplicar(){
    //recibir los datos
    let numeroU = parseInt(document.getElementById("nUno").value)
    let numeroD = parseInt(document.getElementById("nDos").value)
    
    //procesar los datos
    let resultadoMulti = parseInt(numeroU * numeroD)
    
    //entregar los resultados
    document.getElementById("resulOperacion").innerHTML = resultadoMulti
    
    }
    function resta(){
        //recibir los datos
        let numeroU = parseInt(document.getElementById("nUno").value)
        let numeroD = parseInt(document.getElementById("nDos").value)
        
        //procesar los datos
        let resultadoResta = parseInt(numeroU - numeroD)
        
        //entregar los resultados
        document.getElementById("resulOperacion").innerHTML = resultadoResta
        
        }
    
