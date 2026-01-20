class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor() {
        this.questions = questions // [{text: "...", choices: [...], answer: "!"}, {}, {}]
        this.currentQuestionIndex = 0 // 0 or 1 or 2 or 3 or 4
        this.correctAnswers = 0
    }

    // 2. getQuestion()
    getQuestion() {
        return this.questions[this.currentQuestionIndex] // {text: "...", choices: [...], answer: "!"}
    }
    
    // 3. moveToNextQuestion()

    // 4. shuffleQuestions()

    // 5. checkAnswer(answer)
    checkAnswer(answerFromUser) {
        // the answer from user
        // right answer
        // let rightAnswer = this.questions[this.currentQuestionIndex].answer
        let currentQuestionObj = this.getQuestion()
        let rightAnswer = currentQuestionObj.answer

        if (answerFromUser === rightAnswer) {
            this.correctAnswers++
        }
    }

    // 6. hasEnded()
}