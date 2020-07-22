import React, { useState } from 'react';
import Editable from '../Components/Common/Editable';
import ButtonNya from '../Components/ButtonNya/ButtonNya';
import { restore, saveState } from '../localStorage_functions';
import Select from '../Components/Select/Select';
import Radio from '../Components/Common/Radio';
import { v1 } from 'uuid';
import { hwReducer } from '../redux/homeWorkReducer';


type UserListType = {
    id: string
    name: string
    age: number
}

function Junior() {
    
    let [editMode, setEditMode] = useState<boolean>(false)
    let [inputValue, setInputValue] = useState<string>('Кликни два раза');
    
    const onClickSaveHandler= () => { saveState("test",  inputValue) }
    const onClickRestoreHandler = ()=> { setInputValue(restore("test")) }




    // ДЗ N7 (begin) SELECT
    let [selectValue, setSelectValue] = useState<string>('')
    let [activeList, setActiveList ] = useState<boolean>(false)
    const fruits = [ // для компонента select
        "apple",
        "oranges",
        "pears"
    ]
    const OnChangeSelecthandler = (value:string) => {
        setSelectValue(value)
    }
    // (end)



    // ДЗ N7 (begin) RADIO
    let [radioValue, setRadioValue] = useState<string>('');
    const onChangeRadiovalue = (value: string) => {setRadioValue(value)}
    const gender =['male', 'female']
    // (end)





    // ДЗ N8 
    let[users, setUsers] = useState<Array<UserListType>>([
        {id: v1(), name: "Thomas",age: 23},
        {id: v1(), name: "Aidan",age: 21},
        {id: v1(), name: "Henry ",age: 60},
    ]);

    const onClickSortHandler = () => {
        setUsers(hwReducer(users, {type: 'SORT', payload: 'down'}))
        debugger
    }
    // ДЗ N8 

    return (
        <div>
            <Editable editMode={editMode} setEditMode={setEditMode} inputValue={inputValue} setInputValue={setInputValue}/>
            <ButtonNya onClick={onClickSaveHandler} >save</ButtonNya>
            <ButtonNya onClick={onClickRestoreHandler} >restore</ButtonNya>
            <Select list={fruits} selectvalue={selectValue} onChange={OnChangeSelecthandler} active={activeList} setActiveList={setActiveList}/>
            <Radio value={radioValue} radioValues={gender} name={"gender"} onChange={onChangeRadiovalue}/>

            <div>
                <label>Список</label>
                <ul>
                    {
                        users.map(item => {
                            return (
                                <li>{item.name}</li>
                            )
                        })
                    }
                </ul>
                <ButtonNya onClick={onClickSortHandler}>Сортировать</ButtonNya>
            </div>
        </div>
    )
}

export default Junior;