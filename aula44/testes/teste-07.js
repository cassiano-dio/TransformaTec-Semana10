let response

const  teste = new Promise((resolve, rejeita) =>{
    console.log("Promessa pendente")
    let r = 0
    let e = 5
    resolve(r + e)
})
.then((res) => {
    response = res
    console.log("Promessa resolvida:", res)
}).catch((erro) => {
    console.log("Promessa rejeitada: ", erro)
}).finally(() => {
    console.log("Executa de qualquer forma")
})

teste.then((res) => {
    response = res
})

console.log(response)

