

var readLineSync= require('readline-sync');
var score = 0;

var head = "HOW WELL DO YOU KNOW ME?"
console.log(head);

var userName = readLineSync.question("What's your name? ");

var welcMsg = "Hello " + userName;
console.log(welcMsg);

var highScore= [{
  name: "Tanay",
  score: "10",
}]
var begin = readLineSync.question('Lets start! Hit ENTER KEY to begin the quiz');
 
function play (q,a) {
  var userAnswer=readLineSync.question(q);

  if (userAnswer.toUpperCase() === a.toUpperCase()) {
    console.log("you are right!");
    score++;
    console.log("Score: ",score);
  }
    else {
    console.log("oops, wrong answer! Try again");
    console.log("Score: ",score);
  }
  console.log("-----")
}

var questions = [{
  question: "which brand phone do I own?",
  answer: "xiaomi"
},
{
  question: "which sports game do I love the most?",
  answer: "football"
},
  {
  question: "Who is my favorite filmstar?",
  answer: "mammooty"
},
{
  question: "Which is my favourite cafe?",
  answer: "kulukki hub"
},
{
  question: "My hometown?",
  answer: "kasaragod"
},{
  question: "What was my majors in college?",
  answer: "computer science"
}];

for(var i=0; i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer);
}

console.log("YAY, you scored: " + score + ". Send the screenshot of your highest score to me and I will update it here!")

console.log("Highscore: ", highScore.name)
