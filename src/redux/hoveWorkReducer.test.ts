import { hwReducer } from './homeWorkReducer';
import { v1 } from "uuid";

test('sorting objects in ascending order in the state', () => {
    const startState = [
        {id: v1(), name: "Thomas",age: 23},
        {id: v1(), name: "Aidan",age: 21},
        {id: v1(), name: "Henry ",age: 60},
    ]

    const endState = hwReducer(startState, {type: 'SORT', payload: "up"});
    expect(endState[0].name).toBe("Aidan");
});


test('sorting objects by washing in the state', () => {
    const startState = [
        {id: v1(), name: "Thomas",age: 23},
        {id: v1(), name: "Zeros",age: 21},
        {id: v1(), name: "Henry ",age: 60},
    ]

    const endState = hwReducer(startState, {type: 'SORT', payload: "down"});
    expect(endState[0].name).toBe("Zeros");
});


test('an array of people who turned 18', () => {
    const startState = [
        {id: v1(), name: "Thomas",age: 23},
        {id: v1(), name: "Zeros",age: 14},
        {id: v1(), name: "Henry",age: 18},
    ]

    const endState = hwReducer(startState, {type: 'CHECK', payload: 18});
    expect(endState[0].age >= 18).toBe(true);
    expect(endState.length).toBe(2)
});

