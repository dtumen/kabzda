import {reducer, SET_COLLAPSED, StateType} from './reducer';

test('reducer should change value to opposite value', () => {

    let state: StateType = {
        collapsed: false,
    }


    const newState = reducer(state, {type: SET_COLLAPSED});


    expect(newState).not.toBe(state);
    expect(state.collapsed).toBeFalsy();
    expect(newState.collapsed).toBeTruthy();
})

test('reducer should return error if action is not correct', () => {

    let state: StateType = {
        collapsed: false,
    }

    expect(() => reducer(state, {
        type: 'FAKE_ACTION'
    })).toThrowError();
})