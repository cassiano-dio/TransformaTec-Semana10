let cpf = "0000000000"
//console.log(cpf.length)

let array = Array.from(cpf)

//console.log(array.length)

try{
    if(cpf.length != 11){
        throw "Tamanho do CPF inválido"
    }else{
        console.log("Tamanho do CPF válido")
    }
}catch(erro){
    console.log(erro)
}