var btn = document.getElementById('here')

btn.addEventListener('click',function(){
  var a = prompt("ingresa el primer valor")
  var b = prompt("ingresa el segundo valor")
  mekeNumbers = () => {
    /*
    * Corregir!!
    * Si se ingresa 2 valores de tipo string retorna NaN
    */
    if((typeof(a) === 'string') && (typeof(b) === 'string')){
      a = parseInt(a)
      b = parseInt(b)
      if (a===b) {
        return (a+b)*3
      } else {
        return a + b
      }
    }
  }
  console.log(mekeNumbers( a, b))
})