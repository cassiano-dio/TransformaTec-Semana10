const dado = '{"nome":"João", "idade":30, "carro":null}';
const pessoa = JSON.parse(dado);

for (const prop in pessoa) {
  console.log("Propriedade: ",pessoa);
  console.log("Valor: ",pessoa[prop]);
}
