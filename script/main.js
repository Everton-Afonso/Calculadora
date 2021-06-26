function NumberInsert(num) {
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function Clear() {
    document.getElementById('result').innerHTML = '';
}

function Back() {
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}
function Calcular() {
    let result = document.getElementById('result').innerHTML;

    if( result ){
        document.getElementById('result').innerHTML = eval(result);
    }else {
        document.getElementById('result').innerHTML = 'null';
    }
}