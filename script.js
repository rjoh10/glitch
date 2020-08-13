//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var gryffindorScore = 0;
var slytherinScore = 0;
var hufflepuffScore = 0;
var ravenclawScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", gryffindor);
q1a2.addEventListener("click", hufflepuff);
q1a3.addEventListener("click", slytherin);
q1a4.addEventListener("click", ravenclaw);

q2a1.addEventListener("click", ravenclaw);
q2a2.addEventListener("click", gryffindor);
q2a3.addEventListener("click", hufflepuff);
q2a4.addEventListener("click", slytherin);

q3a1.addEventListener("click", ravenclaw);
q3a2.addEventListener("click", hufflepuff);
q3a3.addEventListener("click", gryffindor);
q3a4.addEventListener("click", slytherin);
                      


//#TODO: Define quiz functions here
function slytherin() {
  slytherinScore += 1;
  questionCount += 1;
 
  if (questionCount >= 3) {
    updateResult();
  }
}

function ravenclaw() {
  ravenclawScore += 1;
  questionCount += 1;

  if (questionCount >= 3) {
    updateResult();
  }
}

function hufflepuff() {
  hufflepuffScore += 1;
  questionCount += 1;

  if (questionCount >= 3) {
    updateResult();
  }
}

function gryffindor() {
  gryffindorScore += 1;
  questionCount += 1;

  if (questionCount >= 3) {
    updateResult();
  }
}

var result = document.getElementById("result");

function updateResult(){
 if (gryffindorScore >= 2){
         result.innerHTML = "Gryffindor!";
 }
 else if(slytherinScore >=2){
        result.innerHTML = "Slytherin!";
 }
 else if(ravenclawScore >=2){
    result.innerHTML = "Ravenclaw!";
 }
 else if (hufflepuffScore>= 2){
    result.innerHTML = "Hufflepuff!";
 }
 else{
    result.innerHTML = "Hmm.. The Sorting Hat is confused. Try again later.";
 }
}