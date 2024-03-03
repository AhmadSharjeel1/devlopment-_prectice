console.log("welcome to ahmad sharejeel");
// its used to log(print) a massage to the console//

// veriables are continer for data
Name = "ahmad sharjeel";
age = 24;
price = 99.99;
x=null;
y=undefined;
isfollow = true;
//its boolien value in this true or false persent 
//null and undefined both are diffrent undefined mean that 
// we dont know what is persent in this(y) and in null we know that
// in this what value is persent but this value is know null
console.log(Name);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(true);
// its dynamically typed language becouse here we dont need to tell that 
// this veriale is int,string,bool its take automaticly and we also can change 
// the veriable value at any time and in same veriable we can also 
// store anather value    
// its directly calculate at runtime 

// here veriale are case sensitive mean "A" and "a" both are diffrent

// in java script we shoulod not define our keyword like that 
// here we defined our keyword with the help of 3 keyword let,const & var
// but in maximum cases we use let and const
let name="ahmad sharjeel";
console.log(name);
let Age=26;
console.log(Age);
let Price=988.999;
console.log(Price);
//var _age=56;
//var _age=89;
//var _age=90;

// mean veriale can be re-declared and update. A global scope varible.
// so we dont use this becouse its confusing 
// so we use here let keyword becouse here in this we can't re-declared
// but also update here its block scope veriable 
//let  _age=56;
//let  _age=89;
//let  _age=90;
// its give error 
let _age=59;
_age = 60//here we update not redeclare this 
console.log(_age);

// const varible can't be re-declared or updated. its a block 
//scope varible mean we use under this {code} only. 
const roll_no=20;
//roll_no=23;// this line give error becouse we dont update const
console.log(roll_no);
const PI = 3.14;
console.log(PI);
let a;
console.log(a);// its give undefined 
a=10;
console.log(a);// its not give undefined 
//const b;// we cant do this here its directly give error 
//becouse here we dont update this 


// data type devide in to two parts in java script
// (1). primitive(7)   (2). non-primitive  
// primitive
// number
// string
// Boolean
// Undefined
// Null
// Biglnt
// Symbol
//typeof(PI);
let f=BigInt("123456789");
let O = Symbol('Hello!');
//non-primitive  
// objet(array,function) here object is like a collection of values
// object created
const student = {
    s_name : "ahmad sharjeel",
    s_age : 20,
    s_cgpa : 8.2,
    s_ispass : true
};
//here left side is key and right sidwe is value so we can sya that here key value pairs persent here 
 // for accessing we have two way 
 //student["s_name"]
 //student.s_name;
 student.s_age = student.s_age + 1; 
 student["s_age"] = student.s_age + 1; 
 // bots are two way for yupdateing this 
 student.s_name="ahmad dayyan";
 console.log(typeof student["s_name"]);
 // we cant chnage const object like student but also changed in const object key

 
