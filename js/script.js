let age = 13;
let userName = "Sasha";
let isStudent = true;
let myString = "never give up";
const myNumber = 9;
let myNull = null;

console.log(age);
console.log(userName);
console.log(isStudent);
console.log(myString);
console.log(myNumber + 10);
console.log(myNull);

const yourName  = prompt("type in your name")
if (yourName){
    console.log("welcome", yourName );
    const isUserAccepted = confirm("please, accept this request");
if (isUserAccepted) {
    console.log("thank you for accepting!");
    const info = alert("this request is dangerous!do you still want to accept it?");
    console.log("thanks for accpeting!", info);
  } else {
    console.log("request rejected!");
  }
}
else {
    console.log("request rejected", yourName );
}
