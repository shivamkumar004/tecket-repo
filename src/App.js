import logo from './logo.svg';
import './App.css';

function App() {
 /* let str="hello";
  let str2="world";

  if(str==="hello" &&str2==="hello"){ 
    console.log("hello world");
     }else{
      console.log('hi');
     }
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
        const arr1 = [1,2,3,4,5,6];

        for (let item of arr1){//for loop
          console.log(item);
        }
     const student = [ 
       {student_name: "shivam kumar ", age :20} ,
       {student_name: "parth kumar" , age : 21},
       {student_name: "nikhil", age : 32}
      
     ]
     for(let item of student ){  
      console.log(item.student_name)
     }
    
     student.forEach((person)=>{ 
      console.log(person.age)
     }); 
     const employ ={
      name : "john",
      age : 30,
      occupation : "youtuber"
     };
     for (const key in employee){
      if(employee.hasownproperty(key)){
        console.log(`${key}:${student[key]}`)
      }
     }

      const student2 = [ 
       {student_name: "shivam kumar ", age :20, fess : 100} ,
       {student_name: "parth kumar" , age : 21,fess : 200},
       {student_name: "nikhil", age : 32, fess :300}
      
     ]
     const mappedstudent = student.map((item)  => {

      return {
        ...item,
        fess : item.age + 300,    
      };
     },[]);
     console.log("student",student);
     console.log("mappedstudent", mappedstudent);*/

     const student = [ 
       {student_name: "shivam kumar ", age :20, fess : 100} ,
       {student_name: "parth kumar" , age : 21,fess : 200},
       {student_name: "nikhil", age : 32, fess :300},                                                   
       {student_name: "mohanm kumar ", age :25, fess : 100},
       {student_name: "harsh kumar" , age : 51,fess : 200},
       {student_name: "nihal", age : 22, fess :300},
     ];
     const filterstudent = student.filter((item)=>{ 
      return item.fess === 100;
    });
    console.log("filter_student", filterstudent)
    
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
