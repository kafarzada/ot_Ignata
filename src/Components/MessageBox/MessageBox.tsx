import React from 'react';
import classes from './MessageBox.module.css';


type MessageBoxPropsType = {
    name: string,
    messageText: string,
    date: string,
}

const MessageBox = (props: MessageBoxPropsType) => {
    return (
        <div className={classes.MessageBox}>
            <div>
                <div className={classes.MessageBox__userName}>{props.name}</div>
                <div className={classes.MessageBox__message}>{props.messageText}</div>
            </div>
            <div className={`${classes.lastItem}`}>
                 <div className={classes.MessageBox__date}>{props.date}</div>
            </div>
        </div>
    )
}

export default MessageBox