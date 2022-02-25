let arr = [];
function addImage(){
    let img = document.getElementById("img").value;
    arr.push(img);
    console.log(arr);
}
function startSlideShow(){
    let content = document.getElementById("content")
    let image = document.createElement("img");
    for(let i = 0; i < arr.length; i++){
        image.src = arr[i];
        displayImage(image);
        // content.append(image);
    }
}

function displayImage(image){
    let i = 0;
    let x = setInterval(function(){
        image.src = arr[i];
        i = i + 1;
        if(i === arr.length){
            clearInterval(x);
        }
        content.append(image);
    },5000)
}