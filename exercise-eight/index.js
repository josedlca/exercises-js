var btn = document.getElementById('here')

btn.addEventListener('click',function(){
  var x = prompt("ingresa el primer valor")
  var y = prompt("ingresa el segundo valor")
  var z = prompt("ingresa el segundo valor")
    mekeNumbers = () => {
        x = parseInt(x)
        y = parseInt(y)
        z = parseInt(z)
        console.log(x, y, z)
        if( (z > y) && (z > x) ) {
            if( y > x){
                console.log(`el mayor es ${z} el segundo es ${y} y el menor de todos es ${x}`)
            }else{
                console.log(`el mayor es ${z} el segundo es ${x} y el menor de todos es ${y}`)
            }
        }
        if( (y > z) && (y > x)) {
            if( z > x){
                console.log(`el mayor es ${y} el segundo es ${z} y el menor de todos es ${x}`)
            }else{
                console.log(`el mayor es ${y} el segundo es ${x} y el menor de todos es ${z}`)
            }
        }
        if( (x > z) && (x > y)) {
            if( z > y){
                console.log(`el mayor es ${x} el segundo es ${z} y el menor de todos es ${y}`)
            }else{
                console.log(`el mayor es ${x} el segundo es ${y} y el menor de todos es ${z}`)
            }
        }
    }

    mekeNumbers()
})