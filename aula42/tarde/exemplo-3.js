var pessoa = {
    "nome": "Cassiano",
    "idade": 32,
    "cpf": "0000000000",
    "competencias": ["javascript", "cloud", "api"],
    "atividades": [
        {
            "descricao":"Reuniao da DIO",
            "horario":"9:00am"
        },
        {
            "descricao":"Transforma Tec",
            "horario":"2:00pm"
        }
    ]
}

console.log("Pessoa", pessoa)

console.log("Nome da pessoa: ", pessoa.nome)

console.log("Competência da pessoa: ", pessoa.competencias[0])

console.log("Nome da atividade da pessoa:", pessoa.atividades[1].descricao)

//pessoa[0]

//pessoa.nome