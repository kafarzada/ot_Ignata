const SET_BG_COLOR = 'SET_BG_COLOR'

export type Themes_StateType = {
    backgroundColor: string
}

type ActionType = setBgColorActionCreatorType

type setBgColorActionCreatorType = {
    type: typeof SET_BG_COLOR
    bgColor: string
}

const start:Themes_StateType = {
    backgroundColor: '#fff'
}

export const themes_reducer = (state: Themes_StateType = start, action:ActionType):Themes_StateType => {
    switch(action.type){
        case SET_BG_COLOR:
            return {
                ...state,
                backgroundColor: action.bgColor
            }
        default:
            return state
    }
}

export const setBgColorActionCreator = (bgColor: string):setBgColorActionCreatorType => {
    return {
        type: SET_BG_COLOR,
        bgColor: bgColor
    }
}