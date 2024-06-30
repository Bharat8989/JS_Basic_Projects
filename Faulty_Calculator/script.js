let random=Math.random();

let a =prompt('Enter first Number')
let b =prompt('Enter second Number')
let c=prompt('Enter Operations')

let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if(random > 0.1){
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}