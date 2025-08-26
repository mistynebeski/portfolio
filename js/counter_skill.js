

let number1 = document.getElementById('number1');
let counter1 = 0;

setInterval(() => {
    if (counter1 == 65){
        clearInterval;
    } else {
        counter1 += 1;
        number1.innerHTML = `${counter1}%`;
    }
}, 30);




/* ------------ number 2 Photoshop ------------ */

let number2 = document.getElementById('number2');
let counter2 = 0;

setInterval(() => {
    if (counter2 == 30) {
        clearInterval;
    } else {
        counter2 += 1;
        number2.innerHTML = `${counter2}%`;
    }
}, 30)

/* ------------ number 3 InDesign ------------ */

let number3 = document.getElementById('number3');
let counter3 = 0;

setInterval(() => {
    if (counter3 == 40) {
        clearInterval;
    } else {
    counter3 += 1;
    number3.innerHTML = `${counter3}%`;
    }
}, 30)

/* ------------ number 4 Figma ------------ */

let number4 = document.getElementById('number4');
let counter4 = 0;

setInterval(() => {
    if (counter4 == 50) {
        clearInterval;
    } else {
    counter4 += 1;
    number4.innerHTML = `${counter4}%`;
    }
}, 30)

/* ------------ number 5 Kirta ------------ */

let number5 = document.getElementById('number5');
let counter5 = 0;

setInterval(() => {
    if (counter5 == 50) {
        clearInterval;
    } else {
    counter5 += 1;
    number5.innerHTML = `${counter5}%`;
    }
}, 30)










/* ------------ number Year ------------

let number_year = document.getElementById('number_year');
let counter_year = 0;

setInterval(() => {
    if (counter_year == 4) {
        clearInterval;
    } else {
    counter_year += 1;
    number_year.innerHTML = `${counter_year}+`;
    }
}, 80)


/* ------------ number Projet ------------ 

let number_project = document.getElementById('number_project');
let counter_project = 0;

setInterval(() => {
    if (counter_project == 2) {
        clearInterval;
    } else {
    counter_project += 1;
    number_project.innerHTML = `${counter_project}+`;
    }
}, 90)

/* ------------ number Client ------------ 

let number_client = document.getElementById('number_client');
let counter_client = 0;

setInterval(() => {
    if (counter_client == 2) {
        clearInterval;
    } else {
    counter_client += 1;
    number_client.innerHTML = `${counter_client}+`;
    }
}, 100);*/
