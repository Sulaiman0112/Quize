const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

const questions = [
    {
        question: "What is the national language of Pakistan?",
        answers: [
            { text: "Urdu", correct: true },
            { text: "Punjabi", correct: false },
            { text: "Sindhi", correct: false },
            { text: "Pashto", correct: false }
        ]
    },
    {
        question: "Who is the founder of Pakistan?",
        answers: [
            { text: "Allama Iqbal", correct: false },
            { text: "Liaquat Ali Khan", correct: false },
            { text: "Muhammad Ali Jinnah", correct: true },
            { text: "Zulfikar Ali Bhutto", correct: false }
        ]
    },
    {
        question: "What is the capital of Pakistan?",
        answers: [
            { text: "Karachi", correct: false },
            { text: "Lahore", correct: false },
            { text: "Islamabad", correct: true },
            { text: "Peshawar", correct: false }
        ]
    },
    {
        question: "What is the national flower of Pakistan?",
        answers: [
            { text: "Rose", correct: false },
            { text: "Jasmine", correct: true },
            { text: "Sunflower", correct: false },
            { text: "Lotus", correct: false }
        ]
    },
    {
        question: "What is the national sport of Pakistan?",
        answers: [
            { text: "Cricket", correct: false },
            { text: "Field Hockey", correct: true },
            { text: "Football", correct: false },
            { text: "Squash", correct: false }
        ]
    },
    {
        question: "Who was the first Prime Minister of Pakistan?",
        answers: [
            { text: "Muhammad Ali Jinnah", correct: false },
            { text: "Liaquat Ali Khan", correct: true },
            { text: "Zulfikar Ali Bhutto", correct: false },
            { text: "Ayub Khan", correct: false }
        ]
    },
    {
        question: "Which city is known as the 'City of Lights' in Pakistan?",
        answers: [
            { text: "Lahore", correct: false },
            { text: "Islamabad", correct: false },
            { text: "Karachi", correct: true },
            { text: "Peshawar", correct: false }
        ]
    },
    {
        question: "What is the national bird of Pakistan?",
        answers: [
            { text: "Peregrine Falcon", correct: false },
            { text: "Peacock", correct: false },
            { text: "Chukar Partridge", correct: true },
            { text: "Golden Eagle", correct: false }
        ]
    },
    {
        question: "Which is the highest peak in Pakistan?",
        answers: [
            { text: "Nanga Parbat", correct: false },
            { text: "K2", correct: true },
            { text: "Broad Peak", correct: false },
            { text: "Rakaposhi", correct: false }
        ]
    },
    {
        question: "When did Pakistan become an Islamic Republic?",
        answers: [
            { text: "14th August 1947", correct: false },
            { text: "23rd March 1956", correct: true },
            { text: "6th September 1965", correct: false },
            { text: "16th December 1971", correct: false }
        ]
    },
    {
        question: "What is the national anthem of Pakistan called?",
        answers: [
            { text: "Qaumi Taranah", correct: true },
            { text: "Pak Sarzameen", correct: false },
            { text: "Aye Watan", correct: false },
            { text: "Hamara Pakistan", correct: false }
        ]
    },
    {
        question: "Who wrote the national anthem of Pakistan?",
        answers: [
            { text: "Allama Iqbal", correct: false },
            { text: "Faiz Ahmed Faiz", correct: false },
            { text: "Hafeez Jalandhari", correct: true },
            { text: "Ahmed Faraz", correct: false }
        ]
    },
    {
        question: "Which river is the longest in Pakistan?",
        answers: [
            { text: "Jhelum", correct: false },
            { text: "Ravi", correct: false },
            { text: "Chenab", correct: false },
            { text: "Indus", correct: true }
        ]
    },
    {
        question: "What currency is used in Pakistan?",
        answers: [
            { text: "Taka", correct: false },
            { text: "Rupee", correct: true },
            { text: "Dinar", correct: false },
            { text: "Rial", correct: false }
        ]
    },
    {
        question: "Which is the largest province in Pakistan by area?",
        answers: [
            { text: "Punjab", correct: false },
            { text: "Sindh", correct: false },
            { text: "Khyber Pakhtunkhwa", correct: false },
            { text: "Balochistan", correct: true }
        ]
    },
    {
        question: "Who was the first President of Pakistan?",
        answers: [
            { text: "Iskander Mirza", correct: true },
            { text: "Ayub Khan", correct: false },
            { text: "Zia-ul-Haq", correct: false },
            { text: "Pervez Musharraf", correct: false }
        ]
    },
    {
        question: "Which city is known as the 'Heart of Pakistan'?",
        answers: [
            { text: "Karachi", correct: false },
            { text: "Rawalpindi", correct: false },
            { text: "Islamabad", correct: false },
            { text: "Lahore", correct: true }
        ]
    },
    {
        question: "Which festival marks the end of Ramadan in Pakistan?",
        answers: [
            { text: "Eid ul-Adha", correct: false },
            { text: "Eid ul-Fitr", correct: true },
            { text: "Shab-e-Barat", correct: false },
            { text: "Milad-un-Nabi", correct: false }
        ]
    },
    {
        question: "What is the national fruit of Pakistan?",
        answers: [
            { text: "Apple", correct: false },
            { text: "Mango", correct: true },
            { text: "Banana", correct: false },
            { text: "Orange", correct: false }
        ]
    },
    {
        question: "Which famous mosque is located in Islamabad?",
        answers: [
            { text: "Badshahi Mosque", correct: false },
            { text: "Faisal Mosque", correct: true },
            { text: "Shah Jahan Mosque", correct: false },
            { text: "Wazir Khan Mosque", correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.class
  }
