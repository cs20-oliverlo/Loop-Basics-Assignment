document.getElementById("happy-btn").addEventListener("click", myFunc1);
function myFunc1() {
    let i = 0
    while (i < 500) {
        i++;
        console.log("I'm so happy!");
    }
}

document.getElementById("mult4-btn").addEventListener("click", myFunc2);
function myFunc2() {
    let number = 8
    while (number < 800) {
        number += 4;
        console.log(number);
    }
}

document.getElementById("oddnumbers-btn").addEventListener("click", myFunc3);
function myFunc3() {
    for (let i = 55; i > 9; i -= 2) {
        console.log(i);
    }
}

document.getElementById("gaga-btn").addEventListener("click", myFunc4);
function myFunc4() {
    let gaga = 0;
    for (let i = 5; i <= 50; i++) {
        gaga = gaga + i;
    }
    console.log(gaga);
}

document.getElementById("tenz-btn").addEventListener("click", myFunc5);
function myFunc5() {
    let gargle = 0;
    let i = 0
    while (i < 100) {
        i += 10;
        gargle = gargle + i;
    }
    console.log(gargle);
}