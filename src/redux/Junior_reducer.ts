const SET_LOADGING = 'SET_LOADGING';

type setLoadingActionType = {
    type: typeof SET_LOADGING
    isLoading: boolean
}


type ActionType = setLoadingActionType

export type StateType = {
    isLoading: boolean
}

let initialState:StateType = {
    isLoading: true
}

export const Junior_reducer = (state:StateType = initialState, action: ActionType): StateType => {
    switch(action.type) {
        case SET_LOADGING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return {...state}
    }
}

export const setLoadingActionCreator = (isLoading: boolean): setLoadingActionType => {
    return {
        type: SET_LOADGING,
        isLoading: isLoading
    }
}