import React, {useState} from 'react';
import { names } from '../../App';

type HelloPropsType  = {
    hello: (name:string) => void
}

function Hello(props: HelloPropsType) {
    
    console.log("Hello rendered")
    let [name, setName] = useState("Alex");
    
    return (
      <div>
        <input type="text" onChange={(e) => {console.log(name = e.currentTarget.value)}}/><button onClick={() => { props.hello(name); setName(name)}}>Ввести</button>
        <div>
            {names.map((item, index) => {
                return <div key={item.id}>{index}. {item.name}</div>
            })}
        </div>
      </div>
    )
}

export default Hello;