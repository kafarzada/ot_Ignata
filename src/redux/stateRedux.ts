import { themes_reducer } from './Themes_reducer';
import { Junior_reducer } from './Junior_reducer';
import { combineReducers, createStore } from "redux";


let reducer = combineReducers({
    juniorPage: Junior_reducer,
    themes: themes_reducer
})


 let store = createStore(reducer)

type RootReducer = typeof reducer;

//@ts-ignore
 window.state = store
export type AppStateType = ReturnType<RootReducer>
export default store