
//var age;
//age = 27;
/* u can as well use: var age = 23;*/
/*var firstname = "Kalu";
var login = true;*/
/* true is a boolean value and its not displayed*/
/*document.write(age);
document.write("<br>")
document.write(firstname);

/* the essence of "+" is to connect variables. its called concatenation */
/* the space bar after "is" and before "me" is to ensure that there is a space btw 2 variables*/

//document.write("My age is " + age + " me");

/*var value = "";        
var numone = prompt("enter first value to perform the multiplication operation", value);   
var numtwo = prompt("enter second value to perform the multiplication operation", value);   
var result = eval(numone * numtwo);       
document.write("The result of multiplying: " + numone + "and " + numtwo + "is: " + result + "." );

(The meaning of var value = ""; - The var statement declares a variable. 
Variables are containers for storing information. Creating a variable in JavaScript is called 
"declaring" a variable: var value; After the declaration, the variable is empty (it has no value)

var value = "";        
var numone = parseInt(prompt("enter first value to perform the multiplication operation", value));   
var numtwo = parseInt(prompt("enter second value to perform the multiplication operation", value));   
var result = eval(numone + numtwo);       
document.write("The result of multiplying: " + numone + "and " + numtwo + "is: " + result + "." );


var value = "";        
var numone = prompt("enter first value to perform the multiplication operation", value);   
var numtwo = prompt("enter second value to perform the multiplication operation", value);   
var result = parseInt(numone) + parseInt(numtwo);       
document.write("The result of multiplying: " + numone + "and " + numtwo + "is: " + result + "." );*/


/*WAYS OF CREATING EVENTS*/


/*$(document).ready(function(e){
    $('#example').click(function(){
        alert('Hello World');
    })
})*/


/*$(document).ready(function(e){
    $('#example').on('click', function() {
        alert("Hello World");
    });
});*/

/*HOW TO CONTROL CSS WITH JS*/

/*$(document).ready(function(e){
    $('#example').click(function() {
        $('#para').css('display', 'block');
    });
});*/

/*NB: .click is an event*/


/*$(document).ready(function(e){
   var i = 0;
    $('#example').click(function(){
        if(i == 0) {
            $('#design').css('background-color', 'red');
            i = 1;
        }
        else{
            $('#design').css('background-color', 'black');
            i = 0;
        }
    })
})*/

/*var loanAmount = 34500;  
var interest = 8;  
var interestAmount, totalAmount; 
interestAmount = loanAmount * (interest / 100);  
totalAmount = loanAmount + interestAmount;   
document.write("<B>Total amount to be paid ($):</B>" +    totalAmount + "<BR />");*/

/* "!" this implies not. example !3 means not equal to 3*/


//var value = ""; /*the "var value" stores the value to be entered which are displaced in the browser*/
//var firstNumber = prompt("enter firstNumber", value);  
//var secondNumber = prompt("enter secondNumber", value);    
//document.write('First number is greater than the second number: ' + (firstNumber > secondNumber));   
//document.write('<br/>First number is less than the second number: ' + (firstNumber < secondNumber));   
//document.write('<br/>First number is equal to the second number: ' + (firstNumber == secondNumber));


/*for (var i = 1; i<=12; i++){
    document.write("4 * " + i + " = " + (4 * i)
    + "<br>");
}

for (var i = 1; i<=12; i++){
    sum = 4 * i;
    document.write("4 * " + i + " = " + sum + "<br>");
}*/




//Arrays
/*var students = new Array('Hancock', 'Biggy', 'Ann', 'Uche', 'Kingsley', 'Kal', 'Emma');
for(var i in students){
    document.write(students[i] + "<br>");
}

//the "i" represents the index of the variable "students" 
//that is it gets the index of the values of the variable students. */
/*var students = new Array('Hancock', 'Biggy', 'Ann', 'Uche', 'Kingsley', 'Kal', 'Emma');
for(var i in students){
    document.write(students[i] + "<br>");
    if(students[i] == "Uche") {
        document.write("hello" + "<br>");
    }
  
}*/

/*var students = new Array('Hancock', 'Biggy', 'Ann', 'Uche', 'Kingsley', 'Kal', 'Emma');
for(var i in students){
    //document.write(students[i] + "<br>");
    if(students[i] == "Uche") {
        document.write('hello' + "<br>");
    }else{
        document.write("no uche" + "<br>");
    }
}*/

