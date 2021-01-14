import React from 'react';
import "./Quiz.css"
import { useState } from 'react'
import QuizAnswer from './QuizAnswer/QuizAnswer';
const Quiz = (props) => {

    const [questionState, setQuestionState] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(localStorage.getItem('selectedAnswer'))


    function checker(data) {
        setSelectedAnswer(data)
    }

    if (selectedAnswer === null) {
        localStorage.setItem('selectedAnswer', -1)
    }

    function checkAnswer() {
        console.log(selectedAnswer)
        let i;
        if (selectedAnswer === props.data.trueAnswers[questionState]) {
            alert("Correct")
        }
    }


    function nextQuestion() {
        if (props.data.quizQuestions[questionState + 1] != null) {
            setQuestionState(questionState + 1)
        }
        localStorage.setItem('selectedAnswer', "")
    }

    function previousQuestion() {
        if (props.data.quizQuestions[questionState - 1] != null) {
            setQuestionState(questionState - 1)
        }
        localStorage.setItem('selectedAnswer', "")
    }

    return (<div className="course-material-container">
        <div className="quiz-container">
            <div className="quiz-title">{props.data.header}</div>
            <div className="quiz-question">{props.data.quizQuestions[questionState]}</div>
            <div className="answers-wrapper">

                <div className="quiz-answers">
                    {props.data.answers[questionState].map((answer) => <QuizAnswer letter={answer.letter} text={answer.text} key={answer.id} id={answer.id} selected={selectedAnswer} setSelected={checker} />)}

                </div>
            </div>
            <div className="check-answer-button" onClick={checkAnswer}>Check Answer</div>
            <div className="next-question-button" onClick={nextQuestion}>Next Question</div>
            <div className="previous-question-button" onClick={previousQuestion}>Previous Question</div>
        </div>

    </div>);
}

export default Quiz;