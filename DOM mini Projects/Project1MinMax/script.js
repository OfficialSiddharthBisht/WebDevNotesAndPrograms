let min = document.querySelector(".MIN h1");
let max = document.querySelector(".MAX h1");
let score = document.getElementById("Scores");

let one = document.getElementById("_1");
let two = document.getElementById("_2");
let three = document.getElementById("_3");
let four = document.getElementById("_4");
let five = document.getElementById("_5");
let six = document.getElementById("_6");
let seven = document.getElementById("_7");
let eight = document.getElementById("_8");
let nine = document.getElementById("_9");
let zero = document.getElementById("_0");

let temp = [one,two,three,four,five,six,seven,eight,nine,zero];
let tempScore = "";
for(let i = 0; i < 10; i++){
    temp[i].addEventListener('click',function(){
        tempScore +=temp[i].innerHTML;
        score.innerHTML = tempScore;
    });
}    

let tempMin = Number.MAX_SAFE_INTEGER;
let tempMax = Number.MIN_SAFE_INTEGER;
let enter = document.querySelector(".enter");
enter.addEventListener('click',compare);

function compare(){
    if(tempMin > +score.innerHTML){
        min.innerHTML = +score.innerHTML;
        tempMin = min.innerHTML;
    }
    if(tempMax < +score.innerHTML){
        max.innerHTML = +score.innerHTML;
        tempMax = max.innerHTML;
    }
    score.innerHTML = "";
    tempScore = 0;
}