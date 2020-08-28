import { Junior_reducer } from './Junior_reducer';
import { combineReducers, createStore } from "redux";


let reducer = combineReducers({
    juniorPage: Junior_reducer
})


 let store = createStore(reducer)

type RootReducer = typeof reducer;
export type AppStateType = ReturnType<RootReducer>
export default store