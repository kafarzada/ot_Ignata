import React, { useState, ChangeEvent } from 'react';


type EditableType = {
    editMode: boolean
    setEditMode: (value: boolean) => void
    setInputValue: (value: string) => void
    inputValue: string
}

const Editable = (props: EditableType) => {
    const onEditMode = ()=> {props.setEditMode(true)}
    const offEditMode = ()=> {props.setEditMode(false);}
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {props.setInputValue(e.currentTarget.value)}

    return( 
        <div>
            {
                props.editMode 
                ? <input
                    onBlur={offEditMode}
                    type={"text"}
                    autoFocus
                    value={props.inputValue}
                    onChange={(e) => {onChangeHandler(e)}}
                    />
                : <span onDoubleClick={onEditMode}>{props.inputValue}</span>
            }
        </div>
    )
}

export default Editable;