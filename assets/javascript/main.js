var start = document.getElementById("start");
var quiz;
var qImg = document.getElementById("qImg");
var qImg = document.getElementById("qImg");
var counter = "0:00";
var timGauge = document.getElementById("timeGauge");
var choiceA;
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");

//document.ready(function() 
document.write(counter);

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

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    document.getElementById("#quiz").innerHTML = questions[0];
    document.write("A" + q.choiceA);
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    runningQuestionIndex = 0;
    renderQuestion();
    runningQuestionIndex++;
}

let score = 0;
let timer;

function checkAnswer(answer) {
    if(questions[rnningQuestionIndex].correct == answer) {
        score++;
        console.log("correct");
    } else {
        console.log("wrong");
    }
    if (runningQuesitonIndex < lastQuestionIndex) {
        count = 0;
        runningQuesitonIndex++;
        renderQuestion();
    } else {
        clearInterval(Timer);
        scoreRender();
    }
}

//start.addEventListener(onClick, start);

function startQuiz() {
    //start.style.display = "none";
    //counterRender();
    //Timer = setInterval(counter, 5000);
    //progressRender();
    renderQuestion();
    quiz.style.display = "block";
}

function scoreRender() {
    document.write(score);
}
//})