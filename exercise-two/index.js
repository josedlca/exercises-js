var btn = document.getElementById('here')

absoluteDiference = () => {
  var a = prompt('Ingresa un numero')
  if((typeof(a) === 'string')){
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
    console.log('error : introdujo caracteres que no son numeros')
  }
}

btn.addEventListener('click',function(){
  absoluteDiference()
})
