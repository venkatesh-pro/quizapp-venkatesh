const quizData = [
  {
    question: 'what are you studying',
    a: 'engineer',
    b: 'doctor',
    c: 'b-com',
    d: 'none',
    answer: 'a',
  },
  {
    question: 'are you want more holiday',
    a: 'yes',
    b: 'no',
    c: 'none of the above',
    d: 'none',
    answer: 'a',
  },
  {
    question: 'do you love studying',
    a: 'yes',
    b: 'no',
    c: 'none of the above',
    d: 'none',
    answer: 'b',
  },
  {
    question: 'Are you missing college friends',
    a: 'yes',
    b: 'no',
    c: 'none of the above',
    d: 'none',
    answer: 'a',
  },
]

const question = document.getElementById('question')
const input = document.querySelectorAll('input')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.querySelector('.submit')

const scoreDiv = document.querySelector('.score-div')
const scoreSpan = document.querySelector('.score')
const nos_question = document.querySelector('.nos_question')
const quiz_container = document.querySelector('.quiz-container')

let currentQuestion = 0
let score = 0
let checked
let currentInputClicked

submit.addEventListener('click', () => {
  if (checked) {
    radioButtonUncheck()
    if (currentQuestion === quizData.length - 1) {
      if (currentInputClicked === quizData[currentQuestion].answer) {
        score++
      }
      scoreDiv.classList.add('completed')
      quiz_container.classList.add('remove')
      scoreSpan.innerText = score
      nos_question.innerText = quizData.length
      //   alert(`finished ${score}`)
    } else {
      if (currentInputClicked === quizData[currentQuestion].answer) {
        score++
      }
      currentQuestion++
    }
    redender()
    checked = false
  } else {
    alert('please click that check box')
  }
})

function redender() {
  question.innerText = quizData[currentQuestion].question
  a_text.innerText = quizData[currentQuestion].a
  b_text.innerText = quizData[currentQuestion].b
  c_text.innerText = quizData[currentQuestion].c
  d_text.innerText = quizData[currentQuestion].d
}
redender()

function radioButtonUncheck() {
  input.forEach((i) => {
    i.checked = false
  })
}
radioButtonUncheck()

function checkRadioButton() {
  let check = ''
  let checkInput = ''
  input.forEach((i) => {
    let c = i.checked
    if (c) {
      check = i.checked
      checkInput = i
    }
  })
  return { check, checkInput }
}

input.forEach((i) => {
  i.addEventListener('input', (e) => {
    checked = checkRadioButton().check
    currentInputClicked = checkRadioButton().checkInput.id
  })
})
