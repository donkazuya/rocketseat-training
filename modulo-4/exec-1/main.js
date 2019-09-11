function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if (idade >= 18) {
            resolve("Maior de Idade");
        }
        else {
            reject("Menor de Idade");
        }
    });
}

checaIdade(30)
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    console.log(error);
});