import { Themes_StateType, setBgColorActionCreator, themes_reducer } from './Themes_reducer';


let start_state: Themes_StateType;
beforeEach(() => {
    start_state = {
        backgroundColor: '#fff'
    }
})


test('the bgColor value should change to a new value',() => {
    const  newColor = '#ccc'
    const action = setBgColorActionCreator(newColor);
    const end_state = themes_reducer(start_state, action);
    expect(end_state.backgroundColor).toBe(newColor)
})