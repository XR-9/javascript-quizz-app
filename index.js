const MainQuesArray = [
    {
        question: "Which planet is known as the 'Red Planet'?",

        answers: [
            { answer: "Venus", iscorrect: false },
            { answer: "Mars", iscorrect: true },
            { answer: "Jupiter", iscorrect: false },
            { answer: "Mercury", iscorrect: false },
        ]
    },
    {
        question: "Who wrote the Indian national anthem 'Jana Gana Mana'?",

        answers: [
            { answer: "Rabindranath Tagore", iscorrect: true },
            { answer: "Bankim Chandra Chatterjee", iscorrect: false },
            { answer: "Mahatma Gandhi", iscorrect: false },
            { answer: "Subhas Chandra Bose", iscorrect: false },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",

        answers: [
            { answer: "Ag", iscorrect: false },
            { answer: "Au", iscorrect: true },
            { answer: "Gd", iscorrect: false },
            { answer: "Go", iscorrect: false },
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",

        answers: [
            { answer: "Mother Teresa", iscorrect: false },
            { answer: "Marie Curie", iscorrect: true },
            { answer: "Rosalind Franklin", iscorrect: false },
            { answer: "Ada Lovelace", iscorrect: false },
        ]
    }
    ,
    {
        question: "You must have used the UPI facility. What does this mean?",

        answers: [
            { answer: "Unified Payment Interface", iscorrect: true },
            { answer: "Universal Payment Initiative", iscorrect: false },
            { answer: "United Payment Integration", iscorrect: false },
            { answer: "Universal Protocol Interface", iscorrect: false },
        ]
    },
    {
        question: "Portuguese were the first Europeans to come to India. When did the Portuguese leave India?",

        answers: [
            { answer: "1947", iscorrect: false },
            { answer: "1950", iscorrect: false },
            { answer: "1961", iscorrect: true },
            { answer: "1971", iscorrect: false },
        ]
    },
    {
        question: "Where is the headquarters of the World Economic Forum?",

        answers: [
            { answer: "Geneva", iscorrect: false },
            { answer: "Switzerland", iscorrect: true },
            { answer: "New York", iscorrect: false },
            { answer: "London", iscorrect: false },
        ]
    },
    {
        question: "What is the currency of Iraq?",

        answers: [
            { answer: "Iraqi Dinar", iscorrect: true },
            { answer: "Iraqi Rial", iscorrect: false },
            { answer: "Iraqi Pound", iscorrect: false },
            { answer: "Iraqi Dollar", iscorrect: false },
        ]
    },
    {
        question: "Lake Tanganyika is the world's longest freshwater lake located in?",

        answers: [
            { answer: "Asia", iscorrect: false },
            { answer: "Africa", iscorrect: true },
            { answer: "Europe", iscorrect: false },
            { answer: "South America", iscorrect: false },
        ]
    },
    {
        question: "Name any two examples of cryptocurrency",

        answers: [
            { answer: "Gold, Silver", iscorrect: false },
            { answer: "Rupee, Yen", iscorrect: false },
            { answer: "Dollar, Euro", iscorrect: false },
            { answer: "Bitcoin, Litecoin", iscorrect: true },
        ]
    },
]
const container = document.querySelector(".container")
let indexOfquestion = 0
let score = 0;
let reviewQuestions = 0
let timeremaining = 300;
let timeInterval;

const choicesArray = []

let answernumber;
questionBox();

document.querySelector(".st-stat-val").textContent = MainQuesArray.length < 10 ? `0${MainQuesArray.length}` : MainQuesArray.length

function resetQuestion() {
    displayquestion()


}
function displayquestion() {



    let questions = MainQuesArray[indexOfquestion]
    document.getElementById("question").textContent = (indexOfquestion + 1) + ". " + questions.question
    let answer1para = document.getElementById("answer1para")
    let answer2para = document.getElementById("answer2para")
    let answer3para = document.getElementById("answer3para")
    let answer4para = document.getElementById("answer4para")
    let answer1option = questions.answers[0]
    let answer2option = questions.answers[1]
    let answer3option = questions.answers[2]
    let answer4option = questions.answers[3]

    answer1para.textContent = answer1option.answer
    answer2para.textContent = answer2option.answer
    answer3para.textContent = answer3option.answer
    answer4para.textContent = answer4option.answer

    document.querySelectorAll('input[name="answer"]').forEach(element => {
        element.checked = false

    }
    )

    updateButtons()
    if(choicesArray[indexOfquestion] !== undefined){
        document.getElementById("clear").style.display = "block"
    }
    else{
         document.getElementById("clear").style.display = "none"

    }



}


function CheckAnswers() {
    const answerArray = MainQuesArray[indexOfquestion].answers




    const CorrectAnswer = answerArray.find(element =>
        element.iscorrect == true
    )

    const selectedoption = []
    selectedoption.push(document.querySelector('input[name="answer"]:checked'))

    let selection = selectedoption[0].id
    let x = selection.split("")


    for (let i = 0; i < x.length - 1; i++) {
        if (["1", "2", "3", "4"].includes(x[i])) {
            answernumber = x[i] - 1
        }
    }

    if (CorrectAnswer.answer === answerArray[answernumber].answer) {
    }
    saveAnswer()



}


function saveAnswer() {
    choicesArray[indexOfquestion] = answernumber

    document.getElementById(`${indexOfquestion + 1}`).classList.add("current")
    document.getElementById("clear").style.display = "block"





}

function updateButtons() {
    if (indexOfquestion === 0) {
        document.getElementById("previous").style.display = "none";

    }
    else {
        document.getElementById("previous").style.display = "flex";

    }
    if (indexOfquestion === MainQuesArray.length - 1) {
        document.getElementById("next").style.display = "none";
        document.getElementById("end").style.display = "flex";
    }
    else {
        document.getElementById("next").style.display = "flex";
        document.getElementById("end").style.display = "none";

    }


}


function questionBox() {

    for (let i = 1; i <= MainQuesArray.length; i++) {
        let Ndiv = document.createElement("a")
        Ndiv.classList.add("number")
        Ndiv.textContent = i
        Ndiv.id = i
        document.querySelector(".numbers").appendChild(Ndiv)

    }
}

function reviewQuestion() {

    for (let i = 1; i <= MainQuesArray.length; i++) {
        let Ndiv = document.createElement("a")
        Ndiv.classList.add("number")
        Ndiv.textContent = i
        Ndiv.id = i
        document.querySelector(".numbers2").appendChild(Ndiv)

    }
}
document.getElementById("previous").addEventListener("click", function () {
    indexOfquestion--;


    displayquestion();
    restoreSelectedAnswer();


})





document.getElementById("save").addEventListener("click", function () {
    if (document.querySelector('input[name="answer"]:checked')) {
        CheckAnswers();

        if (indexOfquestion !== MainQuesArray.length - 1) {
            indexOfquestion++;

            displayquestion();
            restoreSelectedAnswer();

        }


    }
}
)

document.getElementById("next").addEventListener("click", function () {
    indexOfquestion++;
    displayquestion();
    restoreSelectedAnswer()
;


})







function lastquestion() {
    document.getElementById("next").textContent = "End"
}


function startTimer() {
    let timerDisplay = document.querySelector(".timer")

    clearInterval(timeInterval)

    timeInterval = setInterval(function () {
        let minutes = Math.floor(timeremaining / 60);
        let seconds = timeremaining % 60;

        let selectedminutes = minutes < 10 ? "0" + minutes : minutes
        let selectedseconds = seconds < 10 ? "0" + seconds : seconds


        timerDisplay.textContent = `Time Left: ${selectedminutes}:${selectedseconds}`


        if (timeremaining <= 0) {
            clearInterval(timeInterval)

            quizzEnd();

        }
        else {
            timeremaining--;

        }






    }, 1000);


}

document.getElementById("end").addEventListener("click", function () {
    quizzEnd();
})
function quizzEnd() {


    document.querySelector(".container").style.display = "none"
    for (let i = 0; i < MainQuesArray.length; i++) {
        let savedAnswerIndex = choicesArray[i];
        if (MainQuesArray[i].answers[savedAnswerIndex] !== undefined) {
            if (MainQuesArray[i].answers[savedAnswerIndex].iscorrect === true) {
                score++;
            }

        }
        
    }

    document.querySelector(".score-display").textContent = `${score} / ${MainQuesArray.length}`
    document.querySelector(".result-wrapper").style.display = "block"



}


document.querySelector(".view-answers-btn").addEventListener("click", function () {
    reviewQuestions = 0
    document.querySelector(".result-wrapper").style.display = "none";
    document.querySelector(".review-wrapper").style.display = "block";

    let Rcontainer = document.querySelector(".review-container")
   if(document.querySelector(".numbers2").children.length === 0){
    reviewQuestion()
}
    displayreviewQuestion();



})

document.querySelector(".back-to-result").addEventListener("click", function () {
    document.querySelector(".result-wrapper").style.display = "block";
    document.querySelector(".review-wrapper").style.display = "none";


})
document.querySelector(".quizz-btn").addEventListener("click", function () {
    document.querySelector(".container").style.display = "block";
    document.querySelector(".start-quizz").style.display = "none";
    startTimer();
    resetQuestion();

})
document.querySelector(".numbers").addEventListener("click", function(event) {
    indexOfquestion = event.target.id - 1;


    displayquestion();
    if (choicesArray[indexOfquestion] !== undefined) {
        const c = choicesArray[indexOfquestion] + 1
        let pq = "answer" + `${c}` + "input"
        document.getElementById(pq).checked = true
    }


})


function displayreviewQuestion() {
    let reviewquestions = MainQuesArray[reviewQuestions]
    document.getElementById("review-question").textContent = `${reviewQuestions + 1}` + ". " + reviewquestions.question
    let Ranswer1 = document.getElementById("review-answer1")
    let Ranswer2 = document.getElementById("review-answer2")
    let Ranswer3 = document.getElementById("review-answer3")
    let Ranswer4 = document.getElementById("review-answer4")
    let answer1option = reviewquestions.answers[0]
    let answer2option = reviewquestions.answers[1]
    let answer3option = reviewquestions.answers[2]
    let answer4option = reviewquestions.answers[3]

    Ranswer1.textContent = answer1option.answer
    Ranswer2.textContent = answer2option.answer
    Ranswer3.textContent = answer3option.answer
    Ranswer4.textContent = answer4option.answer

    Ranswer1.className = "review-answer1"
    Ranswer2.className = "review-answer2"
    Ranswer3.className = "review-answer3"
    Ranswer4.className = "review-answer4"

    let userchoice = choicesArray[reviewQuestions]

    reviewquestions.answers.forEach(function(ansObj , j){
        let div = document.getElementById("review-answer" + (j +1))


        if(ansObj.iscorrect === true){
            div.classList.add("correct-ans")
        }
        else if(!ansObj.iscorrect &&  j === userchoice){
            div.classList.add("wrong-ans")
        }

    })



}
document.querySelector(".previous2").addEventListener("click", function () {
    if(reviewQuestions > 0) reviewQuestions--
    displayreviewQuestion()
})
document.querySelector(".next2").addEventListener("click", function () {
    if(reviewQuestions < MainQuesArray.length - 1) reviewQuestions++
    displayreviewQuestion()
})
document.querySelector(".numbers2").addEventListener("click" , function(event){
    reviewQuestions = event.target.id - 1
    displayreviewQuestion();


})

document.querySelector("#clear").addEventListener("click" , function(){
    document.querySelectorAll('input[name="answer"]').forEach(element => {
        element.checked = false

    })
    choicesArray[indexOfquestion] = undefined

    document.getElementById(`${indexOfquestion + 1}`).classList.remove("current")

    document.getElementById("clear").style.display = "none"


})
function restoreSelectedAnswer(){
    if (choicesArray[indexOfquestion] !== undefined) {
        const c = choicesArray[indexOfquestion] + 1
        let pq = "answer" + `${c}` + "input"
        document.getElementById(pq).checked = true
    }

};