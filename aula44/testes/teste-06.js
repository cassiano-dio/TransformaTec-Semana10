var p2 = new Promise(function(resolve, reject) {
    resolve(1);
});



var soma =p2.then(function(value) {
  console.log(value); // 1
    return value + 1;
}).then(function(value) {
  console.log(value); // 2
});
