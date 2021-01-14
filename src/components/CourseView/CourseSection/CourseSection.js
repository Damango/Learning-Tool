import React from 'react';
import "./CourseSection.css"
const CourseSection = (props) => {


    function changeCourseView() {

        setTimeout(function () {
            props.changeView(props.id)
        }, 100)


        localStorage.setItem('selectedAnswer', "")

    }

    if (props.header === "") {
        return (<div className="none"></div>)
    }

    return (<div className="course-section" onClick={changeCourseView}>
        <div className="section-text" >{props.header}</div>
    </div>);
}

export default CourseSection;