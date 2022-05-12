function verificar(opcao)
{
    if(["maçã", "banana", "cenoura"].includes(opcao) === false)
    {
        let error = new RangeError(opcao + ' não faz parte do conjunto')
        throw error 
    }
}

try
{
    verificar("repolho")
}
catch(error)
{
    if(error instanceof RangeError)
    {
        console.log(error.name)
        console.log(error.message)
    }
}