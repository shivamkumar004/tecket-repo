import logo from './logo.svg';
import './App.css';

function App() {
 /* let str="hello";
  let str2="world";

  if(str==="hello" &&str2==="hello"){ 
    console.log("hello world");
     }else{
      console.log('hi');
     }*/
     const employ= { 
     name:"shivam",
     salary:10,
     emid :123,
     };
     if(employ.emid === 123){
      console.log(employ);
     }else{
      console.log("bye");
     }
     const employ2= {
      name:"shivam",
      salary:20,
      emid :132
     }
     if(employ.name===employ2.name){
      console.log("hellow")}
      else{ 
        console.log("bye")
      }
      const fun1 = () =>{
        console.log("1");
      }
      if(employ.name===employ.name)
        { 
          fun1()
        }
         else{
          console.log("hello")
        }
     

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}
export default App;
