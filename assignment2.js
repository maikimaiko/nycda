//NYCDA Assignment 2 - JavaScript Functions 

function square(num) {
    var result = num * num;
    console.log('Square number of ' + num + ' is ' + result);
    return result;
}

function half(num) {
    var result = num / 2;
    console.log('Half of ' + num + ' is ' +  result);
    return result;
}

function percent(num1, num2) {
    var result = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return result;
}

function area(radius) {
    var result = Math.PI * squareNumber(radius);
    console.log('The area of circle with ' + radius + ' is ' + result);
    return result;
}

function finalfunction(num) {
    var half    = half(num);
    var squared = square(half);
    var area    = area(squared);
    var result  = percent(squared, area);
}