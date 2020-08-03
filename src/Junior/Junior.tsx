import React, { useState } from 'react';
import s from './Junior.module.css'
import Editable from '../Components/Common/Editable';
import ButtonNya from '../Components/ButtonNya/ButtonNya';
import { restore, saveState } from '../localStorage_functions';
import Select from '../Components/Select/Select';
import Radio from '../Components/Common/Radio';
import { v1 } from 'uuid';
import { hwReducer } from '../redux/homeWorkReducer';
import DateViewer from '../Components/DateViewer/DateViewer';


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
    let [selectedValue, setSelectedValue] = useState<string>('')
    const cityes = [ // для компонента select
        {id: v1(), value: "Moscow"},
        {id: v1(), value: "London"},
        {id: v1(), value: "Paris"},
    ]

    // (end)



    // ДЗ N7 (begin) RADIO
    let [radioValue, setRadioValue] = useState<string>('');
    const onChangeRadiovalue = (value: string) => {setRadioValue(value)}
    const gender =['male', 'female']
    // (end)





    // ДЗ N8 
    let[users, setUsers] = useState<Array<UserListType>>([
        {id: v1(), name: "Isobelle",age: 23},
        {id: v1(), name: "Aidan",age: 21},
        {id: v1(), name: "Henry",age: 60},
        {id: v1(), name: "Eliza",age: 19},
        {id: v1(), name: "Alice",age: 25},
    ]);

    const onClickSortHandler = (s: string) => {
        let sortedList = hwReducer(users, {type: 'SORT', payload: s});
        setUsers([...sortedList])
    }

    const renderedUsers = users.map((item, index) => <li key={index}>{item.name}</li>)
    // ДЗ (end) N8 

    // ДЗ (begin) n9
    const [date, setDate] = useState(new Date());
    const [timerID, setTimerId] = useState(setTimeout(() => {
        setDate(new Date())
    }, 1000))
    let [dataViewerActive, setdataViewerActive] = useState(false)
    const dateOnClickHandler = () => {
        clearInterval(timerID);
        const timer_id = setInterval(() => setDate(new Date()), 1000);
        setTimerId(timer_id);
    }

    const stopDateClickHandler = () => {
        clearInterval(timerID)
        console.log('asd');
        
    }
    const dateShowMouseEnterHandler = () => {
        setdataViewerActive(true)
    }
    const dateHadeMouseOutHandler = () => {
        setdataViewerActive(false)
    }
    return (
        <div>
            <Editable editMode={editMode} setEditMode={setEditMode} inputValue={inputValue} setInputValue={setInputValue}/>
            <ButtonNya onClick={onClickSaveHandler} >save</ButtonNya>
            <ButtonNya onClick={onClickRestoreHandler} >restore</ButtonNya>
            <Select value={selectedValue} values={cityes} onChange={setSelectedValue}/>
            <Radio value={radioValue} radioValues={gender} name={"gender"} onChange={onChangeRadiovalue}/>

            <div>
                <label>Список</label>
                <ul>
                    {renderedUsers}
                </ul>
                <ButtonNya onClick={() => {onClickSortHandler("up")}}>от А до Z</ButtonNya>
                <ButtonNya onClick={() => {onClickSortHandler("down")}}>от Z до A</ButtonNya>
            </div>


            <div>
                <div onMouseEnter={dateShowMouseEnterHandler} onMouseLeave={dateHadeMouseOutHandler} className={s.date}>
                    {`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}
                    <DateViewer date={`${date.getDay()} : ${date.getMonth()} : ${date.getFullYear()}`} show={dataViewerActive}/>
                </div>
                <ButtonNya onClick={dateOnClickHandler}>Время</ButtonNya>
                <ButtonNya onClick={stopDateClickHandler}>Остановить Время</ButtonNya>
                
            </div>
        </div>
    )
}

export default Junior;