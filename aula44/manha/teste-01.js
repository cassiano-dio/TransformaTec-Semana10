//criando um novo objeto da classe Promise e atribuindo ao valor da variável "cons test"
const teste = new Promise((resolve, rejeita) => {
                         // parâmetros para a criação do objeto da classe Promise
    let a = 2+2
    setTimeout(
        
        () => resolve(a),
        3000
    )

})

teste.then(
    (res => {
        console.log("RESULTADO: ",res)
    })
)

