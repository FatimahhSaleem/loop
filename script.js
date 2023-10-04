//                   loop
// Q1
// Write a program that uses a for loop to output the numbers from 1 to 10 to the console.


for (i=0;i<10;i++){
    console.log(i+1);
}

// Q2
// Write a program that uses a for loop to output the even numbers from 0 to 20 to the console.

console.log("Even numbers from 0 to 20 are:" );
for(i=1;i<21;i++){
    if(i%2==0){
        console.log(i);
    }

}

// Q3
// Write a program that uses a for loop to output the Fibonacci sequence up to a 20 numbers.
let num1 = 0 ;
let num2 = 1 ;
console.log(num1);
console.log(num2);
for(i=0;i<21;i++){
    result=num1+num2;
    num2=num1;
    num1=result;
    console.log(result);

}










// Q4
// Write a program that uses a for loop to output a multiplication table for a certain number entered by the user. For example, if the user enters 5,the program could output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50


let num=prompt("Enter a number:")
for(i=1;i<11;i++){
    console.log(num +" X "+i+ " = "+num*i);
}


// Question 2
// There are two gymnastics teams, Dolphins and Koalas.

// They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your Tasks
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
// Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// Test data:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data 2: Dolphins score 97, 112 and 101.  Koalas score 109, 95 and 123
// Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolphinScore1=prompt("Enter the score of dolphin first round: ");
let dolphinScore2=prompt("Enter the score of dolphin second round: ");
let dolphinScore3=prompt("Enter the score of dolphin third round: ");
let  dolphinsAverage=(dolphinScore1+dolphinScore2+dolphinScore3)/3;
let koalaScore1=prompt("Enter the score of koala  first round: ");
let koalaScore2=prompt("Enter the score of  koala second round: ");
let koalaScore3=prompt("Enter the score of koala  third round: ");
let  koalasAverage=(koalaScore1+koalaScore2+koalaScore3)/3;


if(dolphinsAverage>koalasAverage){
    console.log("Dolphins are the winner.")
}
else if(dolphinsAverage<koalasAverage){
    console.log("Koalas are the winner.")
    
}
else{
    console.log("Its a tie.")

}

