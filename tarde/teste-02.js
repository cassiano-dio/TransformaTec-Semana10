console.log(1)
console.log(2)
console.log(3)
console.log(4)
//função assíncrona para gerar um delay de 5 segundos enquanto todo o resto do programa continua sendo executado
setTimeout(
    () => {
        console.log(5)
    },
    5000
)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)