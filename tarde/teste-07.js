let idade = 10

try {
    
    if(idade < 18){

        throw {
            " ":"IdadeInvalida",
            "message": "Para entrar na balada tem que ter mais de 18 anos!"
        }

    }else{
        console.log("Entrada liberada na balada")
    }

} catch (erro) {
    
    console.log(erro.name)
    console.log(erro.message)

}