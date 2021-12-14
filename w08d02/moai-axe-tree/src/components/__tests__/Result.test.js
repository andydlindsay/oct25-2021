import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

// import the library that we are going to fake
import axios from 'axios';

// tell jest to fake that library
jest.mock('axios');

// create some fake data
const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15
  },
  {
    id: 2,
    name: 'Bob',
    points: 10
  },
  {
    id: 3,
    name: 'Carol',
    points: 5
  },
];

test('can display results from an API call', () => {
  // tell jest to respond to any Axios request with our fake data
  axios.get.mockResolvedValue({ data });

  // render the Result component
  const {getByTestId, findByText, container, debug} = render(<Result status="Waiting" />);

  // getByTestId(container, 'high-scores')

  // console.log(prettyDOM(container))
  debug();

  // find the high score button
  const highScoreButton = getByTestId('high-scores');

  // click on the high score button
  fireEvent.click(highScoreButton);

  // look for our fake data in the DOM
  return findByText('Bob', { exact: false });
});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
