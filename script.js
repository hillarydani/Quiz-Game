const questions = [
    {
        text: "What is Hillary last name?",
        options: ["Paul", "John", "Daniel", "Davids"],
        correct: "Daniel"
    },
    {
        text: "What is the opposite of sorry'?",
        options: ["Happy", "Congratulation", "NoSorry", "Happiness"],
        correct: "Congratulation"
    },
    {
        text: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Jupiter"
    },
    {
        text: "What is the capital of Nigeria?",
        options: ["Lagos", "Abuja", "Kano", "Port Harcourt"],
        correct: "Abuja"
    },
    {
        text: "Who is the current President of Nigeria as of 2024?",
        options: ["Muhammadu Buhari", "Goodluck Jonathan", "Bola Ahmed Tinubu", "Yemi Osinbajo"],
        correct: "Bola Ahmed Tinubu"
    },
    {
        text: "Which Nigerian city recently launched the largest seaport in West Africa?",
        options: ["Lagos", "Port Harcourt", "Calabar", "Lekki"],
        correct: "Lekki"
    },
    {
        text: "What is the name of Nigeria's currency?",
        options: ["Naira", "Dollar", "Cedi", "Franc"],
        correct: "Naira"
    },
    {
        text: "Which Nigerian state is known as the 'Food Basket of the Nation'?",
        options: ["Benue", "Kano", "Kaduna", "Oyo"],
        correct: "Benue"
    },
    {
        text: "Who is the current Governor of Lagos State as of 2024?",
        options: ["Akinwunmi Ambode", "Babajide Sanwo-Olu", "Babatunde Fashola", "Akinwumi Adesina"],
        correct: "Babajide Sanwo-Olu"
    },
    {
        text: "Which Nigerian artist won a Grammy Award in 2023?",
        options: ["Burna Boy", "Wizkid", "Davido", "Tiwa Savage"],
        correct: "Burna Boy"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionArea = document.getElementById('question-area');
    const optionsArea = document.getElementById('options-area');
    const messageArea = document.getElementById('message-area');

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionArea.textContent = currentQuestion.text;
        optionsArea.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            li.addEventListener('click', () => checkAnswer(option));
            optionsArea.appendChild(li);
        });

        messageArea.textContent = '';
    } else {
        displayScore();
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const messageArea = document.getElementById('message-area');

    if (selectedOption === currentQuestion.correct) {
        score++;
        messageArea.textContent = 'Correct!';
    } else {
        messageArea.textContent = `Wrong! The correct answer is ${currentQuestion.correct}.`;
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000);
}

function displayScore() {
    const questionArea = document.getElementById('question-area');
    const optionsArea = document.getElementById('options-area');
    const messageArea = document.getElementById('message-area');
    const scoreArea = document.getElementById('score-area');

    questionArea.textContent = 'Quiz Completed!';
    optionsArea.innerHTML = '';
    messageArea.textContent = '';
    scoreArea.textContent = `Your total score is: ${score} out of ${questions.length}`;
}

loadQuestion();
