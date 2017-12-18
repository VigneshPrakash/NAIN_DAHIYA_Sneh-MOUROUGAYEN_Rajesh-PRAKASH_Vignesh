import React from 'react';
import logo from '../logo.svg';
import {Survey} from './Survey';
import './App.css';
import {defaultChoices} from '../helpers/default-survey';
import {AddChoice} from './AddChoice';
import {surveyHelper} from '../helpers/surveyhelper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      survey: defaultChoices
    }
  }
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        
        <p className="App-Que">
          <strong>What is your favourite color?</strong>
        </p>
        <div className="App-Data">
            <Survey survey={this.state.survey} onUpdateChoice={this.onUpdateChoice}/>
            <AddChoice onAddChoice={this.onAddChoice}/>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
  onAddChoice=(newSurveyData)=>{
    this.setState({survey: surveyHelper.addChoice(this.state.survey, newSurveyData)});
  }
  onUpdateChoice=(id, result)=>{
    const updatedChoice = surveyHelper.updateSurvey(this.state.survey, id, result);
    this.setState({survey : updatedChoice});
    let array = (Array.from(updatedChoice.map(t=>t.vote)));
    let sum=0;
    sum=array.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    console.log(sum);
    var percent = surveyHelper.performPercentage(updatedChoice,sum);//we calculate the %
    this.setState({survey: percent});//we update the value of the percentage field
    console.log(percent);
    //this.setState({survey: surveyHelper.performPercentage(updatedChoice,sum)});
  }
  /*onAddChoice=(newSurveyData)=>{
      this.state.survey.push({
      id: Math.floor((Math.random()*10000 +1)),
      color: newSurveyData,
    });
    this.setState({survey: this.state.survey})
  }
  onToggleChoice=(toggleChoiceId)=>{
    this.setState({survey: surveyHelper.toggleChoice(this.state.survey), toggleChoiceId})
  }*/
}

export {App};
