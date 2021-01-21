const router = require('express').Router();
let Question = require('../models/question.model');

router.route('/').get((req, res) => {
    Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/add').post((req, res) => {
  const questionNo = req.body.questionNo;
  const question = req.body.question;
  const answer1 = req.body.answer1;
  const answer2 = req.body.answer2;
  const answer3 = req.body.answer3;
  const answer4 = req.body.answer4;

  const newQuestion = new Question({
    questionNo,
    question, 
    answer1, 
    answer2, 
    answer3,
    answer4
  });

  newQuestion.save()
  .then(() => res.json('Question Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Question.findById(req.params.id)
  .then(question => res.json(question))
  .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
