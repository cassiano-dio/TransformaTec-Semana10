async function criaPromessa(){

    console.log("Função criaPromessa")

    return new Promise(
        (resolve) =>{
            let a = 250
            let b = 350

            let c = a + b

            console.log("Soma na promessa: ",c)

            resolve(c) //600
        }
    )

}

async function calculaMedia(){

    console.log("Função calculaMedia")

    const valor = await criaPromessa()

    let media = valor / 2

    console.log("Media calculada retornada da função assíncrona: ", media)

    await calculaDobro(valor) //600
    
}

async function calculaDobro(valor){

    console.log("Função calculaDobro")

    let dobro = valor * 2

    console.log("Dobro calculado retornado da função assíncrona: ", dobro)
    
}


calculaMedia()