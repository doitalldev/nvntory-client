import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import AddItem from './AddItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
});

it('renders cancel button without crashing', () => {
  render(
    <button type='button' onClick={() => history.push('/dashboard')}>
      Cancel
    </button>
  );
});
