const quizz = [
    {
        question: "What is largest animal?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Giraffe", correct: false},
            {text: "Dinosaur", correct: false}
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Paris", correct: true},
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false}
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Mars", correct: false},
            {text: "Saturn", correct: false}
        ]
    },
    {
        question: "What is the largest country in the world?",
        answers: [
            {text: "USA", correct: false},
            {text: "China", correct: false},
            {text: "Russia", correct: true},
            {text: "Canada", correct: false}
        ]
    },
    {
        question: "What is the largest ocean in the world?",
        answers: [
            {text: "Atlantic", correct: false},
            {text: "Indian", correct: false},
            {text: "Arctic", correct: false},
            {text: "Pacific", correct: true}
        ]
    }
];
buildTest();
timer();
submitTest();
checkButton();
function buildTest(){
    for(let i = 0; i < quizz.length; i++){
        let question = quizz[i].question;
        let answers = quizz[i].answers;

        //Create quizz div = question div + answer div
        let quizzDiv = document.createElement("div"); 
        quizzDiv.className = "quizz-div";
        //Create question div
        let questionDiv = document.createElement("div");
        questionDiv.className = "question-div";
        if(i == 0){
            questionDiv.innerHTML = "<h4> Câu hỏi " + (i+1) + ": " + question + "</h4>";
        } 
        else{
            questionDiv.innerHTML = "<br> <h4> Câu hỏi " + (i+1) + ": " + question + "</h4>";
        }
        quizzDiv.appendChild(questionDiv);
        
        let answerDiv = document.createElement("div");
        answerDiv.className = "answer-div";
        for(let j = 0; j < answers.length; j++){
            let answer = answers[j].text;
            //Create answer button
            let answerElement = document.createElement("button");
            setStyleButton(answerElement);
            answerElement.innerHTML = answer;
            answerDiv.appendChild(answerElement);
        }
        quizzDiv.appendChild(answerDiv);
        document.getElementById("quizzes").appendChild(quizzDiv);
    }
}

function checkButton(){
    let queryString = "";
    let quizzesDiv = document.getElementById("quizzes");
    let quizzDiv = quizzesDiv.getElementsByClassName("quizz-div");
   
    for(let i = 0; i < quizzDiv.length; i++){
        let answerDiv = quizzDiv[i].getElementsByClassName("answer-div")[0];
        let answerElement = answerDiv.getElementsByTagName("button");
        
        let previousAnswer = 0;
        for(let j = 0; j < answerElement.length; j++){
            answerElement[j].addEventListener("click", function(){
                console.log("You clicked on " + (i+1) + " " + (j+1));
                let currentAnswer = i+1;
                // let previousAnswer = answerDiv.getElementsByClassName("selected");

                // if(previousAnswer.length > 0){
                //     previousAnswer[0].classList.remove("selected");
                //     previousAnswer[0].style.backgroundColor = ""; // Reset the background color
                // }

                // answerElement[j].classList.add("selected");
                // answerElement[j].style.backgroundColor = "red";
            });
        }
    }
}



function submitTest(){
    //Submit the test and transfer the answer to result.html
    document.getElementById("submit-button").addEventListener("click", function(){
        clearInterval(timer); // Clear the timer
        queryString = getAnswer(); // Get the answer of each question
        window.location.href = 'result.html?' + queryString; // Redirect to result.html with the query string
    });
}

function timer(){
    var timeLeft = 600; // 10 phút
    var timer = setInterval(function () {
        document.getElementById('time-left').innerText = formatTime(timeLeft);
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById('timer').innerText = 'Hết giờ!';
            document.getElementById('submit-button').disabled = true;
            alert("Đã hết giờ! Bạn đã nộp bài thành công!");
            submitTest();
        }
    }, 1000);
    
    function formatTime(seconds) {
        var mins = Math.floor(seconds / 60);
        var secs = seconds % 60;
        return mins + ':' + (secs < 10 ? '0' : '') + secs;
    }
    
    // JavaScript cho việc nộp bài
    document.getElementById('submit-button').addEventListener('click', function () {
        clearInterval(timer);
        //display alert when submit
        alert("Bạn đã nộp bài thành công!");
        // Kiểm tra câu trả lời và xử lý
    });
}
            
function setStyleButton(answerElement){
    answerElement.style.display = "block";
    answerElement.style.width = "100%";
    answerElement.style.padding = "10px";
    answerElement.style.margin = "10px 0";
    answerElement.style.background = "#fff";
    answerElement.style.color = "#333";
    answerElement.style.border = "3px solid red";
    answerElement.style.borderRadius = "10px";
    answerElement.style.cursor = "pointer";
}