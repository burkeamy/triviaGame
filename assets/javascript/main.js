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
    document.getElementById("timer").innerHTML = setInterval(timer, 5000);;
    document.getElementById("question").innerHTML = q.question;
    document.getElementById("choiceA").innerHTML = q.choiceA;
    document.getElementById("choiceB").innerHTML = q.choiceB;
    document.getElementById("choiceC").innerHTML = q.choiceC;
    document.getElementById("choiceD").innerHTML = q.choiceD;
    //Timer = setInterval(counter, 5000);
}

function checkAnswer(answer) {
    addEventListener("click",checkAnswer); 
    if(questions[rnningQuestionIndex].correct == answer) {
        correct++;
        console.log("correct");
    } else {
        incorrect++;
        console.log("wrong");
    }
    if (runningQuesitonIndex < lastQuestionIndex) {
        count = 0;
        runningQuesitonIndex++;
        renderQuestion();
    } else {
        clearInterval(Timer);
    }
}

function startQuiz(){
addEventListener("click",startQuiz); 
    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("choices").style.display = "block";
    
    renderQuestion()
    
}

function scoreRender() {
    console.log(score)
    document.write(score);
}
//})