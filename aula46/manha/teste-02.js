let a = 50
let b = 30

// tenta executar o código
try {
    console.log(a + c)

//captura o erro
} catch (error) {
    console.log(error.name)

//executa independente do resultado
} finally {
    console.log("Final da execução")
}