// Data In JavaScript Object : -
let obj = {
    name : "siddharth",
    age : 21
}
// Data in JSON Format: - 
let JSONobj = {
    "name" : "siddharth",
    "age" : 21
}

/*
Important notes about JSON : - 
1 - It's just a data format and does not contain any functions/methods
2 - Even a single misplaced comma can damage the whole file.
3 - Only quoted strings can be used as properties.
*/

/*-------------------*/
/*
Now since we have many methods for Javascript Object and since we need to use 
those methods for the JSON files therefore we convert js object to json objcect
json data ===> js objects  --> JSON.parse(jsonObj);
js objects ===> json data --> JSON.stringify(obj)
*/
/*
Now in local storage to store the data like array and objects we can just convert the data in JSON format using JSON.stringify then we can access the data like array and object in local storage too
*/