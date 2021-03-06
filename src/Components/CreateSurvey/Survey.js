import React, { useState, Fragment } from 'react';
const Survey = (props) => {	
    
    const [ surveyType, setSurveyType ] = useState('defaultValue');
    const[options,setOptions]=useState([{value:``,id:Date.now()}]);

    const onAddition=()=>{
        // first aproch

        if(surveyType==='single' && options.length==2)return;
        if(surveyType==="multi" && options.length===4)return;
        setOptions([...options,{value:'',id:Date.now()}])

    }
    const onAddItem=(text,id)=>{
        const optionCopy=[...options];
        const updateOption=optionCopy.map((option)=>
        {
            if(option.id===id){
                return {...option,value:text}
            }
            else{
                return option;
            }
        })

    }
    const onAddAnswer=(text,id)=>{
        const optionCopy=[...options];
        const updateOptions=optionCopy.map((option)=>
        {
            if(option.id===id){
                return {...option,value:text}
            }
            else{
                return option
            }
    
        });
        setOptions(updateOptions);

    }

    const onRemoveItem=(id)=>{
        const updatedOption=options.filter(option=>option.id!==id);
        setOptions(updatedOption);
    }

	return (

    <Fragment>		

        <div className="question-type-container">
            <select	name="survey" value={surveyType} onChange={(evt) => {
                setSurveyType(evt.target.value);
                setOptions([{value:'',id:Date.now()}]);
        }}>
            <option value="defaultValue">Select question type</option>
            <option value="multi">Multi-select</option>					
            <option value="single">Single select</option>				
            </select>			
            </div> 
            {surveyType!=="defaultValue" ?(           
            <div className="survey-container">                
            <input type="text" placeholder="Enter your question here" className="question-container" value={props.question} onChange={(evt)=>{onAddItem(evt.target.value)}} />                
            <p>Options</p> 
             {options.map((option)=>(

                     
            <div className="answer-container"key={option.id}>                    
            <input type="text" placeholder="Type answer here" value={props.option} onChange={(evt)=>{
                onAddAnswer(evt.target.value)

            }}/>  
            <p onClick={onAddition}>➕</p>                   
            <p onClick={()=>{
                onRemoveItem(option.id)
            }}>➖</p>               
            </div>  
            
             ))}  
             {(surveyType==='multi' && options.length>=4)||
             (surveyType==='single' && options.length===2)?(
                <div>
                <button>Add question</button> 
                <div><button>Publish</button></div> 
             </div>  

             ):null}
                    
            </div>	
            ):null}  
        </Fragment>	
            );
        };
export default Survey;