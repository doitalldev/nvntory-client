import React from 'react';
import ReactDOM from 'react-dom';
import { renderer, act } from 'react-test-renderer';
import Dashboard from './Dashboard';
import { BrowserRouter } from 'react-router-dom';

let container = null;
// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   ReactDOM.unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });
describe('rendering', () => {
  it('Renders Dashboard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
