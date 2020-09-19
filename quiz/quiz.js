import Question from './question.js'

class Quiz {
  constructor(amount, questions) {
    this.currentElement = document.querySelector('.current');
    this.totalElement = document.querySelector('.total');
    this.totalAmount = amount;
    this.answeredAmount = 0;
    this.questions = this.setQuestions(questions);
    this.nextButton = document.querySelector('#next');
    this.nextButton.addEventListener('click', this.nextQuestion.bind(this));
    this.renderQuestion();
  }

  setQuestions(questions) {
    return questions.map(question => new Question(question));
  }

  renderQuestion() {
    this.questions[this.answeredAmount].render();
    this.currentElement.innerHTML = this.answeredAmount;
    this.totalElement.innerHTML = this.totalAmount;
  }

  nextQuestion() {
    const checkedElement = this.questions[this.answeredAmount].answerElements.filter(el => el.firstChild.checked);
    if (checkedElement.length === 0) {
      alert('You need to select an answer');
    } else {
      this.questions[this.answeredAmount].answer(checkedElement)
      this.showResult();
      this.answeredAmount++;
      this.renderQuestion();
    }
  }

  showResult() {
    this.questions[this.answeredAmount].isCorrect ? alert('Correct answer :)') : alert('Wrong answer :(');
  }
}

export default Quiz;