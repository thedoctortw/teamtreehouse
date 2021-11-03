// store correct answers
//when quiz begins, no answers are correct
let correctAnswer1 = 5;
let correctAnswer2 = 2;
let correctAnswer3 = false;
let correctAnswer4 = "elephant";
let correctAnswer5 = "dota 2"; // :P

let correctAnswers = 0;

//store the rank of a player
const RANK_GOLD = "Gold";
const RANK_SILVER = "Silver";
const RANK_BRONZE = "Bronze";
const RANK_NO_CROWN = "No Crown";

//initial rank
let playerRank = RANK_NO_CROWN;

//select the <main> HTML element
let output = document.querySelector('main');
//ask at least 5 questions
//store each answer in a variable
//keep track of the number of correct answers
let a1 = prompt("How many fingers does a human have?");
let a2 = prompt("How many eyes does a human have?");
let a3 = prompt("is 2+2 = 5? Answer with true or false");
let a4 = prompt("which is bigger, a cat or an elephant?");
let a5 = prompt("Dota 2 or LoL?");


//rank player based on number of correct answers
//5 correct answers - gold
//3-4 correct answer - silver
//1-2 correct answer - bronze
//0 correct - no crown
if(+a1 === correctAnswer1)
{
  correctAnswers += 1;
}
if(+a2 === correctAnswer2)
{
  correctAnswers += 1;
}
if(a3.toLowerCase() === String(correctAnswer3))
{
  correctAnswers += 1;
}
if(a4.toLowerCase() === correctAnswer4) 
{
  correctAnswers += 1;
}
if(a5.toLowerCase() === "dota 2")
{
  correctAnswers += 1;
}

if(correctAnswers === 5)
{
  playerRank = RANK_GOLD;
}
else if(correctAnswers === 3 || correctAnswers === 4)
{
  playerRank = RANK_SILVER;
}  
else if(correctAnswers === 1 || correctAnswers === 2)
{
  playerRank = RANK_BRONZE;
}

  
//output - results to the <main> element
output.innerHTML = `<p>You got ${correctAnswers} out of 5 questions correct.<br> 
Crown earned: ${playerRank}</p>`;

  
  
  
  
  