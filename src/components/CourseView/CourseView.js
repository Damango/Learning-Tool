import React from 'react';
import "./CourseView.css"
import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import CourseSection from './CourseSection/CourseSection'
import Quiz from "./Quiz/Quiz"
const CourseView = (props) => {

    const [courseState, setCourseState] = useState(0)

    const [theCourseData, setTheCourseData] = useState(props.data.data);

    const [testNumber, setTestNumber] = useState(0)




    const viewStyle = useSpring({ opacity: 1, from: { opacity: 0 } })
    const barView = useSpring({ from: { marginLeft: -300 }, to: { marginLeft: 0 } })
    const textStyle = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 500 }, delay: 200 })


    function changeView(data) {
        setCourseState(data)
        setTestNumber(1)
        setTimeout(function () {
            setTestNumber(0)
        }, 1)


    }

    function quiz_material_view() {
        if (theCourseData[courseState].header === 'QUIZ') {
            return <Quiz data={theCourseData[courseState]} />
        }

        if (testNumber === 1) {
            return (<div></div>)
        }

        else {
            return (<div className="course-material-container">
                <animated.div style={textStyle} className="material-texts-container">
                    <div className="section-container">
                        <animated.div className="section-title">{theCourseData[courseState].header}</animated.div>
                        <div className="course-text">{theCourseData[courseState].headerText}</div>
                        <div className="section-texts">{theCourseData[courseState].subSections.map((text) => <div className="texts-wrapper">
                            <div className="section-subtitle">{text.title}</div>
                            <div>{text.texts.map((a) => <div className="course-text">{a}</div>)}</div>
                        </div>)}
                        </div>
                    </div>
                </animated.div>
            </div>)
        }
    }

    return (<div className="course-view-container">
        <animated.div style={barView} className="course-nav-bar">
            <div className="course-nav-bar-header">
                <animated.div style={viewStyle} className="header-text">{props.data.courseName}</animated.div>
                <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
                </div>
            </div>
            <div className="course-bar-sections-container">
                {theCourseData.map((section) =>
                    <CourseSection header={section.header} id={section.position} changeView={changeView} end={theCourseData.length} />
                )}
            </div>
        </animated.div>
        {quiz_material_view()}
        <div className="close-view-button" onClick={() => { props.courseViewHandler(0) }}><i className="far fa-times-circle"></i></div>
    </div>);
}

export default CourseView;