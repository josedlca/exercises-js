var btn = document.getElementById('here')

multiploNewTest= () => {
  var a = prompt('Ingresa un numero')
  if((typeof(a) === 'string')){
    a = parseInt(a)
    if(a > 0){
        var m3 = a % 3
        var m7 = a % 7
        /**
         * La condicional dentro de la instruccion switch deberia evaluar una condicional
         */
        switch(true){
            case (m7 > 0) && (m3 > 0):
                return console.log(`${a} no es un multiplo de 3 ni de 7`)
            case (m7 === 0) && (m3 === 0):
                return console.log(`${a} es un multiplo de ambos 3 y de 7`)
            case m3 === 0 && m7 > 0:
                return console.log(`${a} es un multiplo de 3`)
            case m7 === 0 && m3 > 0:
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
}

btn.addEventListener('click',function(){
    multiploNewTest()
})
