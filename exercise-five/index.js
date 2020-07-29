var btn = document.getElementById('here')

lastNumbers = () => {
    var a = prompt('Ingresa un numero')
    var b = prompt('Ingresa un numero')
    a = parseInt(a)
    b = parseInt(b)
    console.log(a,b)
    if((a < 0) || (b < 0)){
        return console.log('Ingreso letras o un negativo')
    }else{
        var ldo = a % 10
        var ldt = b % 10
        if(ldo === ldt){
            return console.log(`Los ultimos digitos de ambos son iguales ${ldo} y ${ldt}`)
        }else{
            return console.log(`Los ultimos digitos de ambos son diferentes  ${ldo} y ${ldt}`)
        }
    }
}

btn.addEventListener('click',function(){
    lastNumbers()
})
