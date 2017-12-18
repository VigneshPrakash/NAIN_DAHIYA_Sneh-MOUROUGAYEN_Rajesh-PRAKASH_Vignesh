import React from 'react';
import PropTypes from 'prop-types';
import './Survey.css';

const SurveyData = (props) =>
        <ul key={props.id}>
            <input className="Survey-input" type="number" min="1" /*onChange={()=>props.onUpdateChoice(props.id, props.vote)}*/ onChange={(e)=>props.onUpdateChoice(props.id, Number(e.target.value))} placeholder="Give your vote"/>
            {props.color}
            <input className="Survey-input" type="text" value={props.result}/>%
        </ul>
   
SurveyData.propTypes={
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
    result: PropTypes.number.isRequired,
}
export{SurveyData};