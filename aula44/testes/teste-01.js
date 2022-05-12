const teste = new Promise ((resolve, reject) => {
	setTimeout(() => resolve ('Promise resolvida'), 3000)
})

// Aqui os callbacks estão ligados a teste

teste.then((res) => {console.log(res)}, (rej) => {console.log("Rej: ",rej)})

// Nessa parte, observamos o mesmo resultado

// new Promise ((res, reject) => {res})
// .then((res) => {console.log(res)}, (rej) => {console.log("Rej: ",rej)})