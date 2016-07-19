//Default Binding. Where the function call is an undecorated plain call, the enclosing scope of the call-site is bound to this
function foo() {
  console.log( this.a );
}

var a = 2;

foo();


//Implicit Binding. Where the function call-site has a containing or owning object it is implicitly bound to the object
var obj = {
  a: 5,
  foo: foo
}


obj.foo();

//Implicit Binding can be lost where the object reference is passed to another variable and then called
var bar = obj.foo;

bar(); // a is 2 here as the binding to the obj property has been lost


//Explicit binding occurs when you use the .call or .apply method on a function cal
var obj2 = {
  a: 14
}

foo.call(obj2) //14 as the function call explicitly forces the call to bind to the obj2 object


//Hard binding. Here we pass the function with the .call() method applied and the object passed into the .call method. No matter how the new function is called it's this will refer to the object specified in the .call() method

var baz = function() {
  foo.call(obj2);
}

baz(); //14 as in obj2, irrespective of the fact that the function call at the call-site is plain

//A more succint way to do this is using the built in .bind() method
var bazz = foo.bind(obj2);
bazz(); //result is 14, as expected


//"new" binding. Using the new keyword, we create a new object that is the this of the function call
function fooBar(a) {
  this.a = a;
}

var fooOfBar = new fooBar(44);
console.log(fooOfBar.a) //44



