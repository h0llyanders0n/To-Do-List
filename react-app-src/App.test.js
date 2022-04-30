///import { render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactDOM from 'react-dom';
import {getQueriesForElement} from '@testing-library/react';
import App from './App';

function render(component){
  const root = document.createElement('div');
  ReactDOM.render(<App/>, root);
  return getQueriesForElement(root);
}

test('ToDo', () => {
  const {getByText,getByLabelText} = render(<App/>);
  //a basic test to verify title:  
  getByText("To Don'ts");
  //without const {} = getQueries... this test can be written as: expect(root.querySelector('h1').textContent)==("To Don'ts");
});

