import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [data, setData] = useState<number>(0) ;
const[numberData,setNumberData] = useState<number>(0);

 useEffect(() => {
  addData();
 },[numberData]);
 const addData = () =>{
  const oldData = data;
  const newData = oldData +1;
  setData(newData);
  console.log(newData);
 };
 const decrementData = () => {
  setNumberData(numberData-1);
 };

  return (
    <>
    <button title="title"onClick={addData} className={`number${data}`}>
      add Data
    </button>
    <div>Incement data: {data} </div>
    <br/>

     <button onClick={decrementData}>decrement</button>
     <div>decrement data :{numberData}</div>
      
    </>
  );
}

export default App
