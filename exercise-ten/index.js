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
        if (seguir == false) {
            salir = 'y'
        }
    }

    var n = numeros.length - 1
    var par = n % 2
    var mid = n / 2
    var nless, nplus
    if( par === 0 ){
        nless = mid - 1
        nplus = mid + 1
    }else{
        mid = mid + 0.5
        nless = mid - 1
        nplus = mid + 1
    }
    var midArr = [numeros[nless], numeros[mid], numeros[nplus]]
    console.log(numeros)
    console.log(midArr)
}

btn.addEventListener('click',function(){
    checkSequence()
})
