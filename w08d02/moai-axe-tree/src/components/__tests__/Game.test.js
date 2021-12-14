import React from 'react';
import Game from '../Game';
import {render, fireEvent} from '@testing-library/react';

describe('tests for the Game component', () => {

  test('clicking on the robot head icon toggles the cheating state', () => {
    // render the Game component
    const {getByTestId} = render(<Game />);

    // find the robot head icon
    const robotHeadIcon = getByTestId('robot-head');

    // click on the robot head
    fireEvent.click(robotHeadIcon);
    
    // determine if cheating is now true
    expect(robotHeadIcon).toHaveClass('cheating');
    
    // click on the robot head
    fireEvent.click(robotHeadIcon);
    
    // determine that cheating is now false
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
