import React, { useEffect } from 'react';
import "./QuizAnswer.css"
import { useState } from 'react'


const QuizAnswer = (props) => {










    function letterStyle() {
        if (localStorage.getItem('selectedAnswer') !== props.letter) {
            return ('quiz-letter')
        }

        else {
            return ('quiz-letter-selected')
        }
    }

    function textStyle() {
        if (localStorage.getItem('selectedAnswer') !== props.letter) {
            return ('quiz-text')
        }

        else {
            return ('quiz-text-selected')
        }
    }


    function containerStyle() {
        if (localStorage.getItem('selectedAnswer') !== props.letter) {
            return ('answer-container')
        }

        else {
            return ('answer-container-selected')
        }
    }



    function selectedHandler() {


        props.setSelected(props.letter)
        localStorage.setItem('selectedAnswer', props.letter)

    }







    return (<div className={containerStyle()} onClick={selectedHandler}>

        <div className="quiz-circle"></div>
        <div className={letterStyle()}>{props.letter}</div>
        <div className={textStyle()}>{props.text}</div></div>);
}

export default QuizAnswer;