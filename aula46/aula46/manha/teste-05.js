let a = 50

try{

    let d = a * "b"
    let c = a

    console.log(a)

    //retorna um erro caso o número seja inválido isNotANumber
    if(isNaN(c)){
        throw "Não é numero válido"
    }

}catch(erro){

    if(erro instanceof ReferenceError){

        //trata o erro do tipo variável não declarada
        console.log("ERRO DE VARIÁVEL NÃO DECLARADA: ",erro)
    }else{

        //trata qualquer outro tipo de erro
        console.log(erro)
    }
}