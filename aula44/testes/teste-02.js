const fs = require('fs')
const { promisify } = require('util')
const readFilePromise = promisify(fs.readFile)
const writeFilePromise = promisify(fs.writeFile)

function outraFuncaoAssincrona (parametro) {
  return new Promise((resolve, reject) => {
    resolve(parametro.split(','))
  })
}

function maisUmaFuncaoAssincrona (parametro) {
  return new Promise((resolve, reject) => {
    // continua
  })
}

readFilePromise('./arquivo.txt')
  .then((err, dados) => {
    writeFilePromise('./outroarquivo.txt', dados)
    return dados
  })
  .then(outraFuncaoAssincrona)
  .then(maisUmaFuncaoAssincrona)
  .catch(console.error)