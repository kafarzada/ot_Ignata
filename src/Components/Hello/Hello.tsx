import React, {useState} from 'react';
import { user } from '../../App';


type HelloPropsType  = {
    names: Array<user>
    hello: (name:string) => void
}

function Hello(props: HelloPropsType) {
    console.log("Hellp Rendered")
    let [name, setName] = useState("");
    
    
    return (
      <div>
        <input type="text" value={name} onChange={ (e) => setName(e.currentTarget.value) }/>
        <button onClick={() => { props.hello(name); setName('')} }>Ввести</button>
        <div>
            {props.names.map((item, index) => {
                return <div key={item.id}>{1 + index}. {item.name}</div>
            })}
        </div>
      </div>
    )
}

export default Hello;