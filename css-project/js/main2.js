/*$(document).ready(function(e){
    $('submit').click(function(e){
        check();
    })
})

function check() {
    var position = document.getElementById('position').nodeValue;
    switch (position) {
        case 'Manager':
            alert('salary: NGN20000');
            break;
        case 'Instructor':
            alert('Salary: NGN100000');
            break;
        case 'staff':
            alert('Salary: NGN70000');
            break;
        default:
            alert('Enter proper Position');
            break;
    }
}*/

/*function check() {
    var i = 6; //i" is the variable that checks the loop and when its meant to stop. 
    //Whenever u see "i" in a code means its iteration which is looping or repetition
    while (i <= 6){
        alert(i);
        i = i + 1;
    }
}*/


/*var i = 1;
while (i <= 50) {
    if (i % 2 == 0) {
        document.write(i + "<br>");
    }
    i += 1;
}*/


/*var i = 1;
while (i <= 50) {
    if (i % 2 > 0) {
        document.write(i + "<br>");
    }
    i += 1;
}*/

/*var i = 1;
do{
    if(i%2 == 0) {
        document.write(i + "<br>");
    }
    i += 1;
} while (i <= 50);*/

for(var i = 50; i >=1; i--) {
    document.write(i + "<br>");
}