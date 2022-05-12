new Promise((resolve, reject) => {
    console.log('Início');

    let r = 0;
    resolve(r + 1);
})
.then((res) => {
    console.log('Sucesso: ', res);
})
.catch(() => {
    console.log('Erro na função');
})
.then(() => {
    console.log('Executa de qualquer forma');
});