1 - Local Storage is a functionality provided by the browser to store the data locally
2 - Local storage has no expiry date. Clear it manually or delete the browser !

Using Local Storage :- 
------- setItem , getItem , removeItem , clear ------------
a - localStorage.setItem('name',"Siddharth");
b - let naam = localStorage.getItem('name');
c - localStorage.removeItem("name");
d - localStorage.clear();

let loadVal = JSON.parse(localStorage.getItem("name"));
localStorage.setItem("name",JSON.stringify(users));
------------------------------------------------------------------------
JSON : -
1 - JavaScript Object Notation (JSON) is a representation of structured data based on JavaScript object syntax. 
2 - It is just a data format no logic involved nothing just data.

Why JSON ?
1 - JSON is one of the most commonly used data formats to transmit data in web applications.
2 - Moreover, its not just JavaScript that supports JSON , many commonly used language on the Web including PHP, Python , C/C++ , Java etc., also support JSON.
3 - Thus, JSON can be used to send data from the front-end to the back-end, and vice-versa.
Many popular databases like MongoDB , CouchDB , MySQL , Oracle and PostgreSQL also have extensive support for JSON.
---- Think Of JSON as an universal data format on the internet.
 