import React, {useState} from 'react';
import { user } from '../../App';
import InputNya from '../InputNya/InputNya';
import ButtonNya from '../ButtonNya/ButtonNya';


type HelloPropsType  = {
    names: Array<user>
    hello: (name:string) => void
}

function Hello(props: HelloPropsType) {
    console.log("Hellp Rendered")
    let [name, setName] = useState("");
    
    
    return (
      <div>
        <InputNya type="text" value={name} onChange={ (e) => setName(e.currentTarget.value) }/>
        <ButtonNya onClick={() => { props.hello(name); setName('')} }>Ввести</ButtonNya>
        <div>
            {props.names.map((item, index) => {
                return <div key={item.id}>{1 + index}. {item.name}</div>
            })}
        </div>
      </div>
    )
}

export default Hello;