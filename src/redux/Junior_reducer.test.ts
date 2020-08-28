import { StateType, setLoadingActionCreator, Junior_reducer } from "./Junior_reducer"

test('changed the loading state' , () => {
    
    let initialState:StateType = {
        isLoading: false
    }
    const action = setLoadingActionCreator(true)
    const endState = Junior_reducer(initialState, action);
    expect(endState.isLoading).toBe(true);
})