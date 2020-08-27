import React, { useState } from 'react';
import Survey from './Survey';
import './_create_survey.css';


const CreateSurvey = (props) => {
const [surveys,setsuvey]=useState([
    {question:'',options:[{value:'',id:Date.now()}],surveyType:''}
])

    return (
        <div className="create-survey-container">
            {surveys.map(survey=>{
                return <Survey question={surveys.question} options={survey.options} surveyType={survey.surveyType}/>
            })}
            
        </div>
    )
}

export default CreateSurvey;