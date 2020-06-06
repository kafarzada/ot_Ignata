import React from 'react';
import classes from './MessageBox.module.css';

type MessageBoxPropsType = {
    name: string,
    messageText: string,
    date: string
}


const MessageBox = (props: MessageBoxPropsType) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}>
                <img className={classes.img} src="https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg" alt=""/>
            </div>
            <div className={classes.MessageBox}>
                    <div>
                        <div className={classes.MessageBox__userName}>{props.name}</div>
                        <div className={classes.MessageBox__message}>{props.messageText}</div>
                    </div>
                    <div className={`${classes.lastItem}`}>
                        <div className={classes.MessageBox__date}>{props.date}</div>
                    </div>
            </div>
        </div>

    )
}

export default MessageBox