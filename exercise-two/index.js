var btn = document.getElementById('here')
/**
 * Corregir: la validacion no funciona
 */
absoluteDiference = () => {
  var a = prompt('Ingresa un numero')
  if(typeof(a) === 'string'){ // innecesarios parentesis
    /**
     * sobre escribir la misma variable puede ser confueso
     * Corregir: Cuando se ingresa caracteres especiales el programa retorna NaN 
     */
    a = parseInt(a)
    if (a > 51) {
      var r = (a - 51) * 3
      return console.log(r)
    } else if ( a === 51){
      var r = 0
      return console.log(0)
    } else {
      var r = (a - 51) * -1
      return console.log(r)
    }
  }else {
    // esta condicon jamas se ejecuta por que promt transforma todo a string!
    console.log('error : introdujo caracteres que no son numeros')
  }
}

btn.addEventListener('click',function(){
  absoluteDiference()
})
