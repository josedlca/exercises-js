var btn = document.getElementById('here')

checkSequence = () => {
    var salir = 'n'
    var numeros = []

    while (salir == 'n') {
        numero = prompt('ingresa un número')
        if (numero != null) {
            numeros.push(parseInt(numero))
        }
        var seguir = confirm('desea ingresar mas numeros')
        if (seguir == false || numeros.length === 4) {
            salir = 'y'
        }
    }
    var one = numeros[0]

    numeros[0] = numeros[1]
    numeros[1] = numeros[2]
    numeros[2] = numeros[3]
    numeros[3] = one

    console.log(numeros)

}

btn.addEventListener('click',function(){
    checkSequence()
})
