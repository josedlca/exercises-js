var btn = document.getElementById('here')

rangeCheck = () => {
    var salir = 'n'
    var numeros = []

    /**
     * El comportamiento es algo confuso talves colocar un contador q cuando llegue hasta 3 el programa continue.
     * Agrega mas comentarios o nombre de forma coherente a tus variables para poder entender mejor que hace tu programa
     */
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

    var trueOrFalse = []
    numeros.forEach(element => {
        if((element > 20) && (element <= 50)){
            return trueOrFalse.push(true)
        }else{
            return trueOrFalse.push(false)
        }
    });
    const theTrue = trueOrFalse.filter(item => item === true)
    
    if( theTrue.length >= 1){
        return console.log(true)
    }else{
        return console.log(false)
    }
}

btn.addEventListener('click',function(){
    rangeCheck()
})
