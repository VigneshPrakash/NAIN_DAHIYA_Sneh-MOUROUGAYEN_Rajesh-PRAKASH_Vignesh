import React from 'react';
import './AddChoice.css';


class AddChoice extends React.Component{
    constructor(){
        super();
        this.state={
            newChoice: ''
        };
    }
    render(){
        
        return(
            <div>
              Add New Color: <input className= "AddChoice-input" type="text" placeholder="Color name" value = {this.state.newChoice} onChange={this.onNewChoice}/>
              <button className="AddChoice-button" onClick={this.onAddChoice}>Add Choice</button>  
            </div>
        );
    }
    onNewChoice=(e)=>{
        const newChoiceValue=e.target.value;
        this.setState({newChoice: newChoiceValue})
    }

    onAddChoice=()=>{
        this.props.onAddChoice(this.state.newChoice);
        //console.log(this.state.newChoice);
        //console.log(newChoice.i)
        this.setState({newChoice:''})

    }
}

export{
    AddChoice
};