var btn = document.getElementById('here')

rangeCheck = () => {
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
