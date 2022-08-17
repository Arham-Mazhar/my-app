import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
// import About from './component/About';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {

const[mode,setmode]=useState('light');
const toggleMode = ()=>{
  if(mode ==='light'){
        setmode('dark')
        document.body.style.backgroundColor='#00112a';
        showAlert('Dark Mode',"success");
        setInterval(() => {
          document.title= 'Welcome Text Web'
          }, 1000);
          setInterval(() => {
            document.title= 'Welcome'
            }, 1500);
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert('Light Mode',"success");
        setInterval(() => {
          document.title= 'Welcome Text Web'
          }, 1000);
          setInterval(() => {
            document.title= 'Welcome'
            }, 1500);
      }
}
//button 2nd
const[mode1,setmode1]=useState('light');
const toggleMode1 = ()=>{
  if(mode1 ==='light'){ 
        setmode1('dark')
        document.body.style.backgroundColor='burlywood';
        showAlert('Dark Mode',"success");
        
        setInterval(() => {
        document.title= 'Welcome Text Web'
        }, 1000);
        setInterval(() => {
          document.title= 'Welcome'
          }, 1500);
      }
      else{
        setmode1('light');
        document.body.style.backgroundColor='bisque`';
        showAlert('Light Mode',"success");
       
        setInterval(() => {
          document.title= 'Welcome Text Web'
          }, 1000);
          setInterval(() => {
            document.title= 'Welcome'
            }, 1500);
      }
}
//alert is a object 
const [alert,setalert]=useState(null);
//showalert is a function
const showAlert = (message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null)
  }, 1000);
}
return (
  <>
  {/* <Router> */}
  <div>
  <Navbar title = "Company"  mode={mode1} mode1={mode1} toggleMode={toggleMode} toggleMode1={toggleMode1}/> 
  </div>

  <Alert alert={alert} />
  
  <div className="container my-3">
  {/* <Switch>
          <Route path="/About">
          <dav className="container" ><About /></dav>    */}
          {/* </Route>
          <Route path="/"> */}
          <TextForm heading="Enter A Text To Analyze" mode={mode} mode1={mode1} showAlert={showAlert}/>
          {/* </Route>
    </Switch> */}
  </div>
   {/* </Router> */}
  
  </>

);
}

export default App;
