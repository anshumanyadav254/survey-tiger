import React from 'react';
import { Redirect } from "react-router-dom";
import './create.css';
const Publish = (props) => {
    let arr = props.location.state.repeatText;

   const renderTofirst=()=>{
    props.history.push('/');
    }
    return (
        <div className="block-head">
        <div className="block">
            <div className="text-center">
                <h4>Who is Kohali ?</h4>
                {arr.map(value => (<>
                   <span ><input type="checkbox"></input> <a className="text">{value}</a></span></>
                ))}
            </div>

            
            {/* <div>
                <h5>Do you have Linkedin installed on your phone?</h5>
                <label>
                <input type="checkbox"/>Yes
                </label>
                <label>
                <input type="checkbox"/>No
                </label>

            </div>  */}

            <button className="kokko" onClick={renderTofirst}>Submit</button>
        </div>
        
        </div>
    )
}
export default Publish;