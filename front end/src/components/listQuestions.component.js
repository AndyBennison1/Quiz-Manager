import React, {Component} from 'react';
import axios from 'axios'; 

export default class listQuestions extends Component {
    constructor(props){
        super(props);

        this.onChangeQuestionNo = this.onChangeQuestionNo.bind(this);
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeAnswer1 = this.onChangeAnswer1.bind(this);
        this.onChangeAnswer2 = this.onChangeAnswer2.bind(this);
        this.onChangeAnswer3 = this.onChangeAnswer3.bind(this);
        this.onChangeAnswer4 = this.onChangeAnswer4.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          questionNo: '',
          question: '',
          answer1: '',
          answer2: '',
          answer3: '',
          answer4: ''
        }
      }

    componentDidMount() {
        axios.get('http://localhost:5000/questions')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    questions: response.data.map(question => question.question),
                    question: response.data[0].questionNo
                })
            }
        })
    }

    onChangeQuestionNo(e) {
        this.setState({
            questionNo: e.target.value
        }); 
    }

    onChangeQuestion(e) {
        this.setState({
            question: e.target.value
        }); 
    }
    onChangeAnswer1(e) {
        this.setState({
            answer1: e.target.value
        }); 
    }
    onChangeAnswer2(e) {
      this.setState({
          answer2: e.target.value
      }); 
  }
  onChangeAnswer3(e) {
    this.setState({
        answer3: e.target.value
    }); 
}
onChangeAnswer4(e) {
  this.setState({
      answer4: e.target.value
  }); 
}

    onSubmit(e) {
        e.preventDefault();

        const question = {
            questionNo: this.state.questionNo,
            question: this.state.question,
            answer1: this.state.answer1,
            answer2: this.state.answer2,
            answer3: this.state.answer3,
            answer4: this.state.answer4,
          }
        console.log(question); 

        axios.post('http://localhost:5000/questions/add', question)
          .then(res => console.log(res.data));

        window.location = '/'; 
    }


    render() {

        return (
            <div className="container">
              <h3>Question {this.state.questionNo}</h3>
                <div className="list-group"> 
                  <label>Question: </label>
                      <li className="list-group-item"
                      value={this.state.question}
                      />
                  <label>Answer 1: </label>
                      <li className="list-group-item"
                      value={this.state.answer1}
                      />
                  <label>Answer 2: </label>
                      <li className="list-group-item"
                      value={this.state.answer2}
                      />
                  <label>Answer 3: </label>
                      <li className="list-group-item"
                      value={this.state.answer3}
                      />
                  <label>Answer 4: </label>
                      <li className="list-group-item"
                      value={this.state.answer4}
                      />
                      </div>

            </div>
            )
    }
}