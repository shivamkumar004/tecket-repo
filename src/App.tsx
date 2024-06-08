import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//const [count, setCount] = useState(0) 
 const [data,setdata]=useState<string>("4");  
 useEffect(() => {
   setdata("world");
 },[]);//pre define function are called hook

  return (
    <>
      <div>[data]</div>
      
    </>
  )
}

export default App
