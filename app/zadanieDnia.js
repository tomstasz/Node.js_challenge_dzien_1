//Twój kod

process.argv.splice(2).forEach(function(value) {
    setTimeout(() => {console.log(value)}, parseInt(value) * 1000);
});

