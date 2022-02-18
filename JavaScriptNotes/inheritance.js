// Inheritance In JS
class Person{
  constructor(n , a){
    this.name = n;
    this.age = a;
  }
  showName(){
    console.log(this.name, this.age);
  }
}

// in this line we inheritthe property of class person in class student using extend keyword
class Student extends Person{
  constructor(n , a){
    super(n , a);
  }
}
// super keyword to take everything from its parent class;

let s1 = new Student("Lokes Pal", 19);
s1.showName();
console.log(s1);



// let p1 = new Person("Siddharth",21);
// p1.showName();
// console.log(p1);
