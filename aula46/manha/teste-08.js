//criando uma classe de erro customizado herdando da classe Error
class ErroFormulario extends Error {
    //construtor de objeto da classe ErroFormulario
    constructor(message){
        //recebendo e sobrescrevendo a propriedade message com a mensagem de erro externa
        super(message)

        //definindo o valor da propriedade name do objeto da classe ErroFormulario
        this.name = "ErroFormulario"
    }
}

try {
    
    let nome = "Cassiano"
    let idade = 32
    let profissao

    if (!nome || idade == null || profissao == null) {

        //criando um novo objeto da classe ErroFormulario, passando uma mensagem personalizada
        let erro = new ErroFormulario("Campos em branco não são permitidos")
        
        //lançando o erro para o catch
        throw erro

    } else {
        
        console.log("Usuário válido")

    }

//recebendo o erro to try
} catch (error) {
    //imprimindo o erro
    console.log(error)
}