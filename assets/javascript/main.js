var start;
var quiz;
var qImg;
var choiceA;
var choiceB;
var choiceC;
var choiceD;
var answer;
var correct = 0;
var incorrect = 0;
var timer = "0:00";


let questions = [{
        question: "What is the North Carolina State Flower?",
        imgSrc: "assets/images/flowering-dogwood.jpg",
        choiceA: "Flowerging Dogwood",
        choiceB: "Sunflower",
        choiceC: "Purple Coneflower",
        choiceD: "Clover",
        corrrect: "A"
    },{
        question: "Which bulb is great to plant if you have a large deer population?",
        imgSrc: "assets/images/daffodils-in-a-vase.jpg",
        choiceA: "Tulips",
        choiceB: "Daffodils",
        choiceC: "Daylillies",
        choiceD: "Hostas",
        correct: "B",
    },{
        question: "Which carnivorous plant is native only to the North and South Carolina coast",
        imgSrc: "assets/images/flytrap.jpg",
        choiceA: "Pitcher Plant",
        choiceB: "Protocarnivorous Plants",
        choiceC: "Spiderweb Plant",
        choiceD: "Venus Fly Trap",
        correct: "D",
    },{
        question: "Which annual flower blooms all winter?",
        imgSrc: "assets/images/pansies.jpg",
        choiceA: "Lantana",
        choiceB: "Pansies",
        choiceC: "Petunias",
        choiceD: "Impatients",
        correct: "B",
    },{
        question: "Which native tree is often used in landscapeing because of its attractive purple flowers",
        imgSrc: "assets/images/redbutTree.jpg",
        choiceA: "Red Maple",
        choiceB: "Red Oak",
        choiceC: "Redbud",
        choiceD: "Tulip Poplar",
        correct: "C",
    },{
        question: "When is the best time to plant a vegetable garden?",
        imgSrc: "",
        choiceA: "The first day of spring",
        choiceB: "The first warm day of spring",
        choiceC: "The average last frost, April 15",
        choiceD: "The middle of July",
        correct: "C",
    },{
        question: "Which is not a characteristic of poision ivy?",
        imgSrc: "",
        choiceA: "5 leaves",
        choiceB: "Fuzzy vines",
        choiceC: "Brightly colored leaves in fall",
        choiceD: "Berries are an excellent food source for birds",
        correct: "A",
    },{
        question: "Which conifer looses it's leaves in winter?",
        imgSrc: "assets/image/baldCypress.jpg",
        choiceA: "Longleaf Pine",
        choiceB: "Bald Cypress",
        choiceC: "Eastern Hemlock",
        choiceD: "Common Yew",
        correct: "B"

    }
]

let lastQuestionIndex = questions.length-1;
let runningQuestionIndex = 0;

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    document.getElementById("question").innerHTML = q.question;
    document.getElementById("choiceA").innerHTML = q.choiceA;
    document.getElementById("choiceB").innerHTML = q.choiceB;
    document.getElementById("choiceC").innerHTML = q.choiceC;
    document.getElementById("choiceD").innerHTML = q.choiceD;
    document.getElementById("timer").innerHTML = setInterval(renderQuestion, 5000);
    //this function is supposed to set the timer for 5 seconds and cycle throught the 8 questions
}

function checkAnswer(answer) {
    addEventListener("click",checkAnswer);
    addEventListener("click",clearInterval());
    addEventListener("click", renterQuestion());
    function answerPic(qImg) {
        setTimeout(answerPic, 2000);
        document.getElementById("qimg").innerHTML = q.qImg;
        clearTimeout();
        //this function is supposed to show the answer imagae for 2 seconds after the usser clicked on an answer
    }

    if(questions[runningQuestionIndex].correct == answer) {
        correct++;
        //this is supposed to check for correct ansowers and add them to the correct var
    } 
    else if(questions[runningQuestionIndex].correct != answer){
        incorrect++;
        //this is supoosed to check for wrong answers and add them to the incorrect var
    } else {
        unanswered++;
        //this is supoosed to take everyting else and add it to the unanswered var
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        clearInterval();
        renderQuestion();
        //this is supposed to clear the timer and send the user to the next question if it is not the last question
    } else {
        document.write("correct").correct;
        document.write("incorrect").incorrect;
        document.write("unanswered").unanswered;
        //this is supposed to display the score if the last question has been answered
        document.getElementById("start").style.display = "block";
        //this is supposed to make the start button reappear and restart the quiz
    }
}

function startQuiz(){
    addEventListener("click",startQuiz); 
    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("choices").style.display = "block";
    renderQuestion()
    }
// this function is supposed to start the quiz with the press of the button

