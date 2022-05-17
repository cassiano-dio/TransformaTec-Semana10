new Promise(
    (resolve) => {

        let a = 10
        let b = 12

        resolve(a + b) //22
        
    }
).then(
    (res) => {
        console.log("Resultado da promessa: " + res) //Resultado da promessa: 22
        return res
    }
).then(
    (res) => {
        console.log("Resultado da promessa * 2: " + res * 2) //Resultado da promessa * 2: 44
        return (res)
    }
).then(
    (res) => {
        console.log("Resultado da promessa * 3: " + res * 3) //Resultado da promessa * 2: 66
    }
).catch(
    (erro) => {
        console.log("Erro:",erro)
    }
)