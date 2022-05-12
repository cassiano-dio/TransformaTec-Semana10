const cpf = "0000000000"

try {
    
    if (cpf.length != 11) {
        throw {
            "name" : "CPFTamanhoInvalido",
            "message": "O tamanho do CPF é inválido"
        }
    } else {
        console.log("Tamanha do CPF é válido")
    }

} catch (error) {
    console.log(error.message)
}