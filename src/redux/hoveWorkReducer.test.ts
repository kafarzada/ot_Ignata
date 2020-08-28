import { hwReducer } from './homeWorkReducer';
import { v1 } from "uuid";

let startState:Array<{id: string, name: string, age: number}>;

beforeEach(() => {
    startState = [
        {id: v1(), name: "Thomas",age: 23},
        {id: v1(), name: "Aidan",age: 21},
        {id: v1(), name: "Zeros ",age: 60},
    ]
})

test('sorting objects in ascending order in the state', () => {
    const endState = hwReducer(startState, {type: 'SORT', payload: "up"});
    expect(endState[0].name).toBe("Aidan");
});


test('sorting objects by washing in the state', () => {
    const endState = hwReducer(startState, {type: 'SORT', payload: "down"});
    expect(endState[0].name).toBe("Zeros");
});


test('an array of people who turned 18', () => {
    startState = [
        {id: v1(), name: "Thomas",age: 23},
        {id: v1(), name: "Zeros",age: 14},
        {id: v1(), name: "Aidan",age: 18},
    ]
    const endState = hwReducer(startState, {type: 'CHECK', payload: 18});
    expect(endState[0].age >= 18).toBe(true);
    expect(endState.length).toBe(2)
});