function mostrarMensaje(){
let edad = parseInt(document.getElementById("edad").value);
//if normal:
//     if (edad >= 18){
//         mensaje = "mayor de edad"
//     }
//  else {
//      mensaje = "menor de edad"
//  }

//if con operador terniario 
let mensaje = (edad >=18) ? "mayor de edad" : "menor de edad"

alert(mensaje)
//document.write(mensaje)
}

function mensajeDos(){

}

function mostrarMensajeDos(){
    let edadP = parseInt(document.getElementById("edadP").value);
    let estaturaP = parseInt(document.getElementById("estaturaP").value);
    let pesoP = parseInt(document.getElementById("pesoP").value);

    let parametroEdad= 80
    let parametroEstatura = 1.40
    let parametroPeso = 70
    let mensajeDecision = ""

    if (edadP <= parametroEdad){
        if (estaturaP >= parametroEstatura){
            if(pesoP == parametroPeso){
                mensajeDecision = "apto para realizar el deporte"
            }else {
                mensajeDecision= "no apto, peso no valido"

            }
        }else {
            mensajeDecision = "no apto, estatura no valido"
        }
    }else{
        mensajeDecision = "no apto, edad no permitida"

       
    }

    alert(mensajeDecision)
}

//con operador logico AND(&&)
if(edadP <= parametroEdad && estaturaP >= parametroEstatura && pesoP ==parametroPeso){
mensajeDecision = "apto para realizar deporte"
}
else{
    mensajeDecision = "no apto para realizar deporte"
}

//con operador logico OR||
if(edadP <= parametroEdad || estaturaP >= parametroEstatura || pesoP ==parametroPeso){
    mensajeDecision = "apto para realizar deporte"
    }
    else{
        mensajeDecision = "no apto para realizar deporte"
    }
    


alerts (mensajeDecision)
