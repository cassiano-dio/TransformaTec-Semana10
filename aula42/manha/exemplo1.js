var pessoa = '{"nome": "Cassiano","idade" : 32}'
var idade = pessoa.idade

console.log("Tipo do dado antes do parse:", typeof(pessoa))
console.log("Propriedade do objeto string antes do parse:", pessoa.nome)

var pessoa_obj = JSON.parse(pessoa)

console.log("Tipo do dado depois do parse:", typeof(pessoa_obj))
console.log("Propriedade do objeto depois do parse:", pessoa_obj.nome)

var pessoa_str = JSON.stringify(pessoa_obj)
console.log("Tipo do dado depois do stringify: ", typeof(pessoa_str))