import { announceResult, robotRetort } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('tests for choosing a robot item', () => {

  test('when cheating is true, returns the winning item', () => {
    const cheating = true;
    const playerSelection = 'Axe';

    const actual = robotRetort(cheating, playerSelection);
    const expected = 'Moai';

    expect(actual).toBe(expected);
  });

  test('when cheating is false, returns a valid item', () => {
    const cheating = false;
    const playerSelection = 'Axe';

    const actual = robotRetort(cheating, playerSelection);
    const options = ['Moai', 'Axe', 'Tree'];

    // expect(options.includes(actual)).toBe(true);
    expect(options).toContain(actual); // throw new Error
    // throw new Error('oh no');
  });

});
