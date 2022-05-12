var carro = {
    "marca":"chevrolet",
    "modelo": "opalao bebum",
    "consumo": "1km/l",
    "cor":"preto",
    "problemas": [{
        "descricao" : "porta nao abre",
        "custo": 2000
    },
    {
        "descricao" : "fusivel queimado",
        "custo": 600
    }]
}

console.log("Carro: ",carro)

console.log("Problema: ",carro.problemas[1])
console.log("Custo do problema: ",carro.problemas[1].custo)

for(let prop in carro){
    console.log(prop + ":" + carro[prop])

}