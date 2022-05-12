const fetch = require('node-fetch');	//npm install node-fetch

fetch('https://httpbin.org/post', {
  method: 'POST',
  body: 'a=1'
})
  .then(res => res.json())
  .then(json => {
	// Do something...
  })
  .catch(err => console.log(err));