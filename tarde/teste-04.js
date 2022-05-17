new Promise(
    (resolve) => {

        let a = 10
        let b = 12

        resolve(a + b  * c) //22
        
    }
).then(
    (res) => {
        console.log("Resultado da promessa: " + res) //Resultado da promessa: 22
        return res
    }
).catch(
    (erro) => {
        console.log("Erro:",erro)
    }
).finally(
    () => console.log("Fim da execução")
)