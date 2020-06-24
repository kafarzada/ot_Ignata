import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import s from './ButtonNya.module.css';

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function ButtonNya (props: ButtonNyaPropsType) {

return <button className={s.buttonNya} {...props}/>
}

export default ButtonNya;