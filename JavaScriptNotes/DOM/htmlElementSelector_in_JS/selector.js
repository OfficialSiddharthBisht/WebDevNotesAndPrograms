/*
The Two Types Of Element Selectors are :- 
1. Single Element Selector
    * getElementById
    * querySelector
2. Multi Element Selector 
    *
*/

//single element selector
let element = document.getElementById("single");
console.log(element);

function changeText() {
    //when we want to use html tags like <b> <i> etc then we can use innerHTML otherwise if we only want to change the text content then innerText
  element.innerHTML = " <i>Siddharth Bisht , now the text is changed </i>";
  element.style.color = "red";
  // we can also style using JS
}

// queary selector when we apply in id then we get the id element from the html documnet , but if we use in class then we only get the first element of the class also we can directly use the tag name
let query = document.querySelector("#forQuery");
query.style.color = "brown";

let only = document.querySelector(".c1");
only.style.color = "blue";

// ?  multi Element Selectors

let multiElem = document.getElementsByClassName("c1");
// since it returns an array therefore we can use loops to iterate through them but we cannot use forEach loop directly for that we have to use Array.from() then for each
Array.from(multiElem).forEach(element =>{
    console.log(element)
});

