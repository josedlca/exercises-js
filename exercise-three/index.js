var btn = document.getElementById('here')

// El programa acepta numeros negativos lo que es incorrecto porque eso no es parte del requerimiento
multiploTest = () => {
  var a = prompt('Ingresa un numero')
  if((typeof(a) === 'string')){
    a = parseInt(a)
    var m3 = a % 3
    var m7 = a % 7
    switch(true){ // cual es el motivo de un condicional???? si todo siempre sera true
        case (m7 > 0) && (m3 > 0):
            return console.log(`${a} no es un multiplo de 3 ni de 7`)
        case (m7 === 0) && (m3 === 0):
            return console.log(`${a} es un multiplo de 3 y de 7`)
        case m3 === 0:
            return console.log(`${a} es un multiplo de 3`)
        case m7 === 0:
            return console.log(`${a} es un multiplo de 7`)
        case m3 > 0:
            return console.log(`${a} no es un multiplo de 3`)
        case m7 > 0:
            return console.log(`${a} no es un multiplo de 7`)
        default:
            return console.log('ingresaste letras o un numero negativo')
    }
  }
}

btn.addEventListener('click',function(){
    multiploTest()
})
