//callback -----------------------------------------------
/*
var years = [1990, 1999, 1980];
function calcAge(years, innerFun)
{   
    var resultArray = [];
    for(var i = 0; i < years.length; i++) {
        resultArray.push(innerFun(years[i]));
    }
    return resultArray;
}

function calculate(el) {
    return 2019 - el;
}

console.log(calcAge(years, calculate));
*/

//function returning function ---------------------------
/*
function interviewQuestion(job)
{
    if( job === 'teacher') {
        return function(name) {
            console.log('Which subject do you teach, ' + name +'?');
        };
    }
    else if( job === 'designer') {
        return function(name) {
            console.log('Hey '+ name +', can you please explain what is UX design?')
        };            
    }
    else {
        return function(name) {
            console.log('Hey ' +name+ ', what do you do?');
        };
    }
        
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('akshat');
interviewQuestion('teacher')('harsh');
*/

//IIFE --------------------------------------------------
/*
(function() {
    console.log('This is a immediately invoked function expression');
})();

*/

//bind and call
/*
var john = {
    first_name: 'John',
    last_name: 'Doe',
    phone: '9652315432',
    printDetails : function(city, state, pincode){
    console.log(this.first_name, this.last_name, this.phone, city, state, pincode);
    }
}

john.printDetails('indore', 'MP', '452016');

var jane = {
    first_name: 'Jane',
    last_name: 'Doe',
    phone: '9996546521'
}

var janeBhopal = john.printDetails.bind(jane, 'bhopal');

janeBhopal('Madhya Pradesh', '452211');

*/

//bind and call example 2
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42


var getXvar = module.getX();
console.log(getXvar);






















