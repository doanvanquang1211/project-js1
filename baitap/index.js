// // // bai 10
function ParityallFunction() {
    // let result5;
    for (i = 2; i <= 9; i++) {
        for (j = 1; j <= 10; j++) {
            document.getElementById('num123').value += i + 'x' + j + '=' + (i * j) + '\n';
        }
        document.getElementById('num123').value += '---------' + '\n'
    }

}

// // // bai5

function myFunction() {
    var h = parseInt(document.getElementById('nhapN').value);
    var total = 0;
    for (k = 1; k <= h; k++) {
        total = total + k;
    }
    document.getElementById('tong').value = total;
}
// // // bai 7

function myisFunction() {
    var number = parseInt(document.getElementById('num').value);
    var tong = 0;
    for (i = 1; i <= number; i += 2) {
        tong = tong + i;
    }
    document.getElementById('ketqua4').value = tong;
}
// // bai4
function checkprimesFunction(n) {

    let flag = true;
    if (n < 2) {
        flag = false;
    } else if (n === 2) {
        flag = true;
    } else if (n % 2 === 0) {
        flag = false;
    } else {
        for (let index = 2; index < n; index++) {

            if (n % index === 0) {

                flag = false;
                break;
            } else {

                flag = true;
            }
        }
    }
    return flag
}
function myallFunction() {

    let n = parseInt(document.getElementById('number').value);
    let a = ''
    for (i = 1; i <= n; i++) {
        let isCheck = checkprimesFunction(i)
        console.log('isCheck', isCheck);
        if (isCheck == true) {
            console.log('i', i);
            a = a + i + ' , '
        }
    }
    console.log(a);
    document.getElementById('kiemtra1').value = a;
}
// // bai 6

function totalFunction() {
    let variable = parseInt(document.getElementById('soA').value);
    let sum = 0;
    for (i = 1; i <= variable; i++) {
        sum = sum + (i * i);
    }
    document.getElementById('total').value = sum;
}
// bai9
function symmetryFunction() {
    let n1 = parseInt(document.getElementById('soN1').value);
    let check;
    let mdx = 0;
    let s = n1;
    while (n1 > 0) {
        mdx = mdx * 10 + n1 % 10;
        n1 = Math.floor(n1 / 10);
    }
    console.log('n', n1);
    console.log('mdx', mdx);
    if (mdx == s) {
        check = 'Yes'

    } else {
        check = 'No'
    }
    document.getElementById('symmetry').value = check;
}
// bai 9


function ParityFunction() {
    let variableall = parseInt(document.getElementById('soN2').value);
    let result;
    let m = 0;
    while (variableall > 0) {
        m = m * 10 + variableall % 10;
        variableall = Math.floor(variableall / 10);
        console.log('m', m);
        if (m % 2 == 0) {
            result = 'No'
            break
        } else {
            result = 'Yes'
        }
    }
    document.getElementById('Parity').value = result;
}


