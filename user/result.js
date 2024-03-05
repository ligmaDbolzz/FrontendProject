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

// Function to parse URL parameters
function getUrlParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const params = {};
    for (let param of urlParams.entries()) {
        params[param[0]] = param[1];
    }
    return params;
}

// Function to calculate user score and display result
function displayResult() {
    const params = getUrlParams();
    let correctAnswers = 0;
    let totalQuestions = 0;

    // Loop through the quiz questions and check user's answers
    quizz.forEach((question, index) => {
        const userAnswer = parseInt(params[`question${index + 1}`]);
        const correctAnswerIndex = question.answers.findIndex(answer => answer.correct);
        if (userAnswer === correctAnswerIndex + 1) {
            correctAnswers++;
        }
        totalQuestions++;
    });

    // Calculate user score
    const userScore = ((correctAnswers / totalQuestions) * 10).toFixed(1);

    // Update result details
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("totalQuestions").textContent = totalQuestions;
    document.getElementById("userScore").textContent = userScore;
}

// Display quiz result
displayResult();

// Function to display review questions
function displayReviewQuestions() {
    console.log("Displaying review questions");
    const reviewQuestions = document.getElementById("reviewQuestions");
    reviewQuestions.style.display = "block";
    const questionList = document.getElementById("questionList");
    questionList.innerHTML = ""; // Clear previous content

    const params = getUrlParams(); // Get URL parameters

    quizz.forEach((question, index) => {
        const listItem = document.createElement("li");
        listItem.style.listStyleType = "none"; // Clear bullet
        listItem.innerHTML = `
            <div class="quizz-div">
                <div class="question-div">
                    <h4>Câu hỏi ${index + 1}: ${question.question}</h4>
                </div>
                <div class="answer-div">
                    <p>Correct Answer: ${question.answers.find(answer => answer.correct).text}</p>
                    <p>Your Answer: ${question.answers[parseInt(params[`question${index + 1}`]) - 1].text}</p>
                </div>
            </div>
        `;

        // Check if user's answer is correct and apply appropriate styling
        const userAnswerIndex = parseInt(params[`question${index + 1}`]) - 1;
        if (question.answers[userAnswerIndex].correct) {
            listItem.style.color = "green";
        } else {
            listItem.style.color = "red";
        }

        questionList.appendChild(listItem);
    });
}

// Event listener for review button
document.getElementById("reviewButton").addEventListener("click", displayReviewQuestions);
