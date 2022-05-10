// 1. Review the add() function show below. notice that a module is used to create a private

// variable called counter.

// Modify this code to make a revealing module that returns an object with two methods. The

// returned object should have a add() method and a reset() method. Where the add method

// adds 1 to the counter, and the reset method set it back to zero.

// Lastly change the global variable name that will hold this object from add to count.

const add =(function(){
    var counter =0;
    function add(){
        counter = counter +1;
    }
    function reset(){
        counter =0;
    }
    return {
        add : add,
        reset: reset
    }
})();

// 2. In the definition of the add() function in the code for the question 1, identify the “free”
// variable. Also write down a definition of what “free” variables are.
//answer : counter is a free variable. A free variable is simply a variable which is not declared inside a given function,
// but is used inside it.


// 3. The add() function in question 1 always adds 1 to the counter each time it is called. Write a
// make_adder(inc) function whose return value is an add function with increment value of
// inc instead of 1. In other words your function should be able to do the following:

const add2 = (function () {
    var counter = 0;
    function add(){
        counter = counter +1;
    }
    function make_adder(inc){
        return function add(){
            return counter = counter +inc;
        }
    }
    function reset(){
        counter = 0;
    }
    return {
        add : add,
        make_adder : make_adder,
        reset : reset
    }
})();

var add5 = add2.make_adder(5);
add5();
add5();
console.log(add5());


// 4. Suppose you are given a file of JavaScript code containing a list of many function and variable

// declarations. All of these function and variable names will be added to the Global JavaScript

// namespace. What simple modification to the JavaScript file can remove all the names from the

// Global namespace?

// answer : Using the Revealing Module Pattern



// 5. Using the Revealing Module Pattern, write a JavaScript definition of a Module that creates an

// Employee Object with the following fields and methods:

// Private field: name

// Private field: age

// Private field: salary

// Private method: getName()

// Private method: getAge()

// Public method: setName()

// Public method: setAge()

// Public method: setSalary()

// Public method: increaseSalary(percentage) // uses private getSalary()

// Public method: incrementAge() // uses private getAge()

const employee = (function (){
    var name = "pheary";
    var age ="21";
    var salary =1000;
    function getName(){
        return name;
    }
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    //public function
    function setName(name){
        name = name;
    }
    function setAge(age){
        age = age;
    }
    function setSalary(salary){
        salary = salary;
    }

    function increaseSalary(percentage){
        salary = getSalary() * percentage/100;
    }
    function incrementAge(age){
        age = getAge() + age;
    }
    return {
        setName, setAge, setSalary, increaseSalary, incrementAge
    };
})();

// 6. Write a few JavaScript instruction to make a Module extension to the module made in the

// previous question. Very important – you are not allowed to modify any of the code to facilitate

// the extension. Your extension should add a public address field and public methods

// setAddress(address) and getAddress()

employee.address ="";
employee.setAddress = function (address){
    this.address = address;
}
employee.getAddress = function(){
    return this.address;
}

employee.setAddress("Fairfield, IA, 55257, 1000North")
console.log(employee.getAddress());

7.//Modify the jsFiddle at: https://jsfiddle.net/TinaXing/oofzum89/ so that the example works

//with call. Then modify it again to work with bind.

var me = {

    first: 'Josh',

    last: 'Splinter',

    getFullName: function () {

        return this.first + ' ' + this.last;

    }

};



var you = {

    first: 'William',

    last: 'Smith'

};



console.log(me.getFullName.apply(you));

console.log(me.getFullName.call(you));

console.log(me.getFullName.bind(you)());