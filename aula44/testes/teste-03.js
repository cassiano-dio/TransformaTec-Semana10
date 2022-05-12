new Promise((resolve, reject) => {
    console.log('Início');

    resolve(r);
})
.then(() => {
    console.log('Sucesso');
})
.catch(() => {
    console.log('Erro na função');
})