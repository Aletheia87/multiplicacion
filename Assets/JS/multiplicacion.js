const num = parseInt(prompt('Ingrese un número entre 1 y 20:'));

let multiplicacion = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i+ ' x ' + num + ' = ' + (i * num));
    }
}

let factorial = (num) => {
    for (let i = 1; i <= num; i++) {
        let rs = 1;
        for (let j = 1; j <= i; j++) {
            rs = rs * j;
        }
        console.log('Factorial de ' + i + 'es: ' + rs);
    }
}

if (num >= 1 && num <= 20) {
    multiplicacion(num);
    factorial(num);
} else {
    console.log('Número fuera del rango');
}
