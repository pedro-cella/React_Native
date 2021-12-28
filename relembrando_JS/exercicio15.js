let promise = () => {
  return new Promise(function(resolve, reject){
    return resolve();
  });
}

console.log(promise());