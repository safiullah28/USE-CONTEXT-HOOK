import React, { useContext } from 'react'
import {data1,data2} from './App';
function ChildC() {
    const name=useContext(data1);
    const age=useContext(data2);
  return (
    <div>
      <h1>My name is {name} and my age is {age}</h1>
    </div>
  )
}

export default ChildC
