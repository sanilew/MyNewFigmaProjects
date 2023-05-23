// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import Button from 'react-bootstrap/Button';
// import TestComp from './Components/TestComp';
// import Pagecontent from './Components/Pagecontent';
import Appheader from './Components/Appheader';
// import { BrowserRouter } from 'react-router-dom/dist';
// import Home from './Components/Pages/Home';
// import Category from './Components/Pages/Category';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';


function App() { 
  // const [step, setStep] = useState(-1);
  const [showB, setShowB] = useState(true);
  const toggleButton = () =>{
    setShowB(!showB)
  }
  
  return (
    <div className="App">
     
      <div>
      {showB == 1 && <Main/>}
         {/* {showB && <button onClick={toggleButton} style={{height:"50px",width:"120px",color:"GrayText"}}>GetS</button>} */}
         {showB&&<Button variant='primary' onClick={toggleButton}>Getstarted</Button>}
         {!showB && <Dashboard/>}
         
          {/* {showB===1 && <Dashboard/>} */}

         
       
         
         
         
      </div>
    </div>
  );
}

export default App;
