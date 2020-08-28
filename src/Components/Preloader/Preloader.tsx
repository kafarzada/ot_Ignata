import React from 'react'
import preloader from '../../assets/img/preloader.svg'

type PropsType =  {
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

const Preloader = (props: PropsType) => {

    const onClickStopHadler = () => {
        setTimeout(() => {
            props.setLoading(false)
        }, 3000)
    }
    return (
        <>
            {props.isLoading ? <img src={preloader} alt=""/> : '' }
            <button onClick={onClickStopHadler}>STOP</button>
        </>
    ) 
}

export default Preloader