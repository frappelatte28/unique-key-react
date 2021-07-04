import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
let arr =[ 'string1', 'string2', 'string3']
function App() {
const [input, setInput] = useState(' ')
const [data,setData] = useState(arr) 

useEffect(()=>{
  const observer = new MutationObserver(mutation => {
    console.log(mutation )
    console.log('DOM mutation detected');
  });

observer.observe(document.querySelector('.App'), {
  childList: true,
  attributes: true,
  subtree: true,
  characterData: true
});
},[])
const handleInput =()=>{
  if(input != " "){
    setData([input,...data]) 
  }
}
const handleOnChange=(e)=>{
  e.preventDefault()
  let text = e.target.value;
  setInput(text)
}
  return (
    <div className="App">
     {data.map((data, index)=>{
       return (<div key={data}> {data}</div>)
     })} 
     <input onChange={handleOnChange}></input>
     <button onClick ={handleInput}>
       click me
     </button>
    </div>
  );
}

export default App;
