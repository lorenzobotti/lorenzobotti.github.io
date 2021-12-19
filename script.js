async function getQuestions() {
    const url = "https://opentdb.com/api.php?amount=50&category=18"

    const response = await fetch(url)
    console.log({ response })
    const questions = await response.json()

    if (questions.response_code !== 0) {
        throw `response code wrong: ${questions.response_code}`
    }

    return questions.results
}

async function nextQuestion() {
    if (currentQuestion) {
        alreadyAsked.push(currentQuestion)
        currentQuestion = undefined
    }

    if (questions.length === 0) {
        questions = await getQuestions()
    }

    showQuestion(questions.pop())
}

const startButton = document.getElementById('start')
const questionBox = document.getElementById('question-box')
const answersDiv = document.getElementById('answers')

const pointsOutput = document.getElementById('points')
const questionOutput = document.getElementById('question')

let questionsAsked = 0
let correctAnswers = 0

let questions = []
let alreadyAsked = []
let currentQuestion

startButton.addEventListener('click', async () => {
    try {
        const downloadedQuestions = await getQuestions()
        console.log({ downloadedQuestions })
        
        questions = questions.concat(downloadedQuestions)
        console.log({ questions })
    } catch(e) {
        console.error(e)
    }


    await nextQuestion()

    console.log('here me is')

    startButton.style.display = 'block'
    questionBox.style.display = 'block'
    pointsOutput.style.display = 'block'
    startButton.style.display = 'none'
})

function showQuestion(question) {
    currentQuestion = question
    questionOutput.innerHTML = question.question
    removeChildren(answersDiv)

    const answers = [...question.incorrect_answers, question.correct_answer]
    shuffleArray(answers)

    for (const answer of answers) {
        const button = document.createElement('button')
        button.innerHTML = answer
        
        answersDiv.appendChild(button)
        button.addEventListener('click', chooseAnswer)
    }
}

async function chooseAnswer(event) {
    questionsAsked += 1
    console.log('answer chosen')
    
    const clicked = event.target
    const correct = getCorrectButton()

    console.log('highlightin correct')
    console.log({ correct })
    correct.classList.add('correct')
    
    if (clicked != correct) {
        console.log('highlightin wrong')
        console.log({ clicked })
        
        clicked.classList.add('wrong')
    } else {
        correctAnswers += 1
    }

    await delay(500)

    pointsOutput.textContent = `${correctAnswers} / ${questionsAsked}`

    await nextQuestion()
}

function getCorrectButton() {
    for (const button of answersDiv.children) {
        if (button.innerHTML == currentQuestion.correct_answer) {
            return button
        }
    }

    return answersDiv.children[0]
}

/**
 * l'api formatta le richieste in modo strano
 * @param {string} line 
 * @returns {string}
 */
function escapeString(line) {
    const quote = '&quot;'

    return line.replace(quote, '"')
}




function removeChildren(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

// grazie mille, stackoverflow
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  