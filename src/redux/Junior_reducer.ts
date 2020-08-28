const SET_LOADGING = 'SET_LOADGING';
const CHANGE_SOUND_VALUE = 'CHANGE_SOUND_VALUE'

type setLoadingActionType = {
    type: typeof SET_LOADGING
    isLoading: boolean
}

type changeSoundValueActionType = {
    type: typeof CHANGE_SOUND_VALUE
    soundValue: number
}


type ActionType = setLoadingActionType
                | changeSoundValueActionType

export type StateType = {
    isLoading: boolean
    sound: {
        minValue: number
        maxValue: number
        currentValue: number
    }
}

let initialState:StateType = {
    isLoading: true,
    sound: {
        minValue: 1,
        maxValue: 100,
        currentValue: 20
    }
}

export const Junior_reducer = (state:StateType = initialState, action: ActionType): StateType => {
    switch(action.type) {
        case SET_LOADGING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case CHANGE_SOUND_VALUE:
            return {
                ...state,
                sound: {
                    ...state.sound,
                    currentValue: action.soundValue
                }
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

export const changeSoundValueActionCreator = (soundValue: number):changeSoundValueActionType => {
    return {
        type: CHANGE_SOUND_VALUE,
        soundValue: soundValue
    }
}