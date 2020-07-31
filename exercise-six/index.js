var btn = document.getElementById('here')
/**
 * Corregir: El programa detecta q los numeros 1,2 y 3 estan en el array pero no evalua que la secuencia 1,2,3 esta dentro del array lo cual es el requerimiento
 */
checkSequence = () => {
    var salir = 'n'
    var numeros = []

    while (salir == 'n') {
        numero = prompt('ingresa un número')
        if (numero != null) {
            numeros.push(parseInt(numero))
        }
        var seguir = confirm('desea ingresar mas numeros')
        if (seguir == false) {
            salir = 'y'
        }
    }

    var isOne = 0
    var isTwo = 0
    var isThree = 0
    var respuesta = ''
    for( var i = 0 ; i < numeros.length ; i++){        
        if(numeros[i] === 1){
            isOne = 1
        }
        if(numeros[i] === 2){
            isTwo = 1
        }
        if(numeros[i] === 3){
            isThree = 1
        }

        if((isOne + isTwo + isThree) == 3){
            respuesta = 'Los tres numeros estan en el array'
        }else{
            respuesta = 'Falta uno de los 3 numeros en el array'
        }
    }
    console.log(respuesta)
}

btn.addEventListener('click',function(){
    checkSequence()
})
