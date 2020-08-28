import { StateType, setLoadingActionCreator, Junior_reducer, changeSoundValueActionCreator } from "./Junior_reducer"

let initialState:StateType;
beforeEach(() => {
    initialState = {
        isLoading: true,
        sound: {
            minValue: 1,
            maxValue: 100,
            currentValue: 1
        }
    }
});

test('changed the loading state' , () => {
    const action = setLoadingActionCreator(true)
    const endState = Junior_reducer(initialState, action);
    expect(endState.isLoading).toBe(true);
})

test('the soundValue should change to the given', () => {
    const action = changeSoundValueActionCreator(50)
    const endState = Junior_reducer(initialState, action)
    expect(endState.sound.currentValue).toBe(50)
})


