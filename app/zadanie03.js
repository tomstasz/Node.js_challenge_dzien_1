//Twój kod


// console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));

var sum = 0;

process.argv.splice(2).forEach(function(value) {
    sum += parseInt(value)
});

console.log(sum);
