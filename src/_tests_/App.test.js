import React from 'react';
import {App} from '../components/App';
import {surveyHelper} from '../helpers/surveyhelper';

it('does not change my initial list to add a new color choice', () => {
    const initialChoices = [ 
        {id:1, color:'Red', value1: 'value'},
        {id:2, color:'Blue', value1: 'value'},
        {id:3, color:'Green', value1: 'value'}
    ]

    const expectedChoices = [...initialChoices];

    surveyHelper.addChoice(initialChoices, 'Last choice');

    expect(initialChoices).toEqual(expectedChoices);
    
});