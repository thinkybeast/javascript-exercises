$(function(){
  const questions = [
    {
      id: 1,
      description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
      options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
    },
    {
      id: 2,
      description: 'Which of the following numbers is the answer to Life, the \
                    Universe and Everything?',
      options: ['66', '13', '111', '42'],
    },
    {
      id: 3,
      description: 'What is Pan Galactic Gargle Blaster?',
      options: ['A drink', 'A machine', 'A creature', 'None of the above'],
    },
    {
      id: 4,
      description: 'Which star system does Ford Prefect belong to?',
      options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
    },
  ];

  const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

  const Quiz = {
    $form: $('form'),
    quizTemplate: Handlebars.compile($('#quizTemplate').html()),
    questionTemplate: Handlebars.compile($('#questionTemplate').html()),
    questions: questions,
    answerKey: answerKey,

    renderQuiz: function() {
      this.$form.prepend(this.quizTemplate({questions: this.questions }));
    },

    handleSubmit: function(e) {
      e.preventDefault();

      $('.question').each((_, question) => {
        this.gradeAnswer($(question));
      });
      $('[type=submit]').prop('disabled', true);
    },

    gradeAnswer: function($question) {
      const qid = $question.attr('data-id');
      const choice = $question.find('input:checked').val();
      if(this.answerKey[qid] === choice) {
        this.markCorrect($question);
      } else {
        this.markIncorrect($question, choice, this.answerKey[qid]);
      }
    },

    markCorrect: function($question) {
      $question.find('.answer').addClass('correct').text('Correct Answer');
    },

    markIncorrect: function($question, choice, correctAnswer) {
      const $answerText = $question.find('.answer').addClass('incorrect');
      const errorType = (choice) ? "Wrong answer." : "You did not provide an answer.";
      $answerText.text(`${errorType} The correct answer is "${correctAnswer}".`);
    },

    resetForm: function(e) {
      e.preventDefault();
      $('.answer').text("").removeClass("correct incorrect");
      $('form')[0].reset();
      $('[type=submit]').prop('disabled', false);
    },

    init: function() {
      Handlebars.registerPartial('questionTemplate', $('#questionTemplate').html());
      this.renderQuiz();
      $('form').on('submit', this.handleSubmit.bind(this));
      $('[value=Reset]').on('click', this.resetForm.bind(this));
    },
  };

  Quiz.init();
});

/*

Handle form submission
  - prevent default
  - pass each input to grading method

Grading method
  Get data-id of input
  Get val of input
  If val not equal to answers[id]
    - Mark incorrect(correctAnswer, incomplete)
      - add class incorrect
      - if incomplete, append text You did not answer this question. The correct answer is answer[id]
      - else append text Wrong Answer. The correct answer is answer[id]
  Else
    - mark correct
      - add class correct
      - append text Correct Answer

Handle form reset
*/