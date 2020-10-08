


var line1 =  document.getElementById("line1")


//Define function doIt
function doIt() {
    line1.innerHTML = "Já buið að breyta línu 1 í þetta?"
    line1.style.background = 'orange';
    
}

// Call function doIt /callback function 2 sec later
//setTimeout()
setTimeout(
    function() {
        doIt()
        
    }, 
    2000
)


// Declare/Define a function
// (accepts parameters)
function sayName( personName ) {
    console.log(personName);
}

// Call the function
// (accepts arguments)
sayName( 'Smári')
sayName( 'Ari')
sayName( 'Pedro')
sayName( 'Bambi')
sayName( 'Jonni')








////////

//This function does two things console logs the namesList and console.logs each array item with a sentence infront




var supHeroes = ['Batman', 'Superman', 'Spiderman']
var  peopleNames = ['Bjarki' , 'Rúnar', 'Gunnar', 'Hakon', 'Baldur']

function listNames (namesList){
    // namesList = ['a', 'b']
    console.log(namesList);

    // Log in the format:
    // Superhero name: Batman
    for (i = 0; i < namesList.length; i++) {
        console.log("superhero name" , namesList[i])
    }
}

listNames(supHeroes)
listNames(peopleNames)

listNames(['a', 'b'])
listNames([123])








///////





//Variable with objects, 
//Function that changes the text to Uppercase letters and shows in the browser

var country = {
    text : "Iceland",
    elementId: "line2"
};

var letters = {
    text : "stórir stafir",
    elementId: "line3"
};

var city = {
    text : "Reykjavík",
    elementId: "line4"
};




function storirstafir (item) {
  
    console.log(item.text)
    console.log(item.elementId)
    document.getElementById(item.elementId).innerHTML = item.text.toUpperCase()
   
    
}


//calling the functions here
storirstafir(country);
storirstafir(letters);
storirstafir(city);







//// Function declaration with arithmetic operators,  



function adder (number1, number2) {
    
    console.log(`Sum of the number1 and number2 is ${number1} + ${number2}`)
}

adder(10,4);



/* explanation here */


/* function-name= */ function adder /* Parameter= */ (number1, number2) {
    // This is what! the function is running
    console.log(`Sum of the number1 and number2 is ${number1} + ${number2}`)
}

/* adder is calling the function and (10,4) is the argument. */
adder(10,4);









 






///  Function With RETURN KEYWORD

 var sum = add(5,4);

 function add (first, second) {
     return first + second;
 }

alert (add(5,4));









////Argument objects, and checking the length of it.

function rastaman () {
    document.write(arguments.length);
}
rastaman("spliff", 15, "ding");







/// more argument objects , with defaul parameters and arguments/array 


function letsGoWithME(zero, one ,two){
    console.log(zero);
    console.log(one);

    console.log(arguments[1]);
    console.log(arguments[2]);

}

letsGoWithME('arg 0', 'arg 1', 'arg twoooooo', 33 , 45 , 65);








/// HOISTING - 
//makes space in memory for variables
// consolel.log(dog) is  not error but undefind, which inlists that the program knows of the variable.
//  Variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the function or statement. However, variables that are hoisted return a value of undefined. So even if you declare and initialize after you use or refer to this variable, it still returns undefined.


//* for example */

console.log(dog);

var dog = "Australian Shephard";


/// this is like saying this


var dog;
console.log(dog);
dog = "Australian Shephard";









//// For EACH method with arrays



let movies = [
    'Snatch', 'Big short', 'Titanic', 'Spiderman', 'Fight Club', 'Lord of the rings'
];

movies.forEach(unicorn);

function unicorn (item , index, array){
    console.log(index, item, array);
}









// Just creating space between in the console

console.log("SPACE BETWEEN")









// For eachmethod is also writing like this

movies.forEach(function(item,index,array){
   /*  console.log(index, item); */
    if(item === 'Titanic'){
        item = item.toUpperCase();

    }else{
        item = item.toLowerCase();
    }
    console.log(index, item)

});









// Anonymous function 
// with a CAllback of 5seconds
//doesnt have a name


//It takes 5sec  for it to run in the console.log

setTimeout(function(){
    console.log('Anonymous function without a name, comes 5sec later, kinda funny XD');
}, 5000)



//Callback button, you click then it consoles "you clicked the btn"

let btn = document.querySelector("#takki");

btn.addEventListener("click", function(e){
    console.log("You clicked the Button");
});






///Arrow function
//You don't need the function keyword, the return keyword, and the curly brackets.

//normal function
function sum (a, b){
    return a + b 
}

//this does the same but is Arrow function
let sum2 = (a, b) => a + b


//normal function

function positivNumber(number){
    return number >= 0 
} 


//Arow

let positivNumber2 = number => number >= 0



 


//Higher order function

const ages1 = [12, 345, 43, 65, 98, 20,21,,3 ,5, 7, 34, 34,32 ,53,645,,645,6 ,456,645 ,65, 45,8, 76]
const ages2 = [12, 345, 43, 65, 98 ,3 ,5,20,21,22, 7, 34, 34,32 ,53,645,,645,6 ,456,645 ,65, 45,8, 76]

const higherThan20 = ages1.filter(function(age){
    if(age >=21) {
        return true;
    }
})
console.log('All number higher than 20', higherThan20)




//same thing here with ES6 version


const higherThan21 = ages2.filter(age => age >= 22);

console.log('All number higher than 21', higherThan21)







///////



//Factory creates and return objects like in many cases here above