// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuSlide from './MenuSlide';
import Appheader from './Appheader';

// import Login from './Login';
import React , {useState} from "react";
import TextTransition, { presets } from 'react-text-transition';

// import TestComp from './TestComp';
import TextEffectts from './TextEffectts';

 
function Main() {
    const [step, setStep] = useState(0);
    
    return (

    
    <div className='container'>
        <div className='row'>
        <div className='col-sm-2'>
            
        <img src='fg2.png' alt='FigmaLogo' height="80px" width="120px"/>
            </div>
            <div className='col-sm-6'>
        <Appheader/>  
</div>
<div className='col-sm-4'>
<MenuSlide/>
</div>
            
            
            

        </div>
        <br/>
        <br/>
        <br/>
        <div className='col'>
            <div className='col-sm-10'>
         <h1 style={{fontFamily:"cursive", fontSize:"70px", position:"sticky"}}>Nothing Great is </h1>
        
            </div>
            <div className='col-sm-8'>
            <h1 style={{fontFamily:"cursive", fontSize:"80px"}}><div class="spinner-border text-warning">made</div> alone. </h1>

            
            </div>
            <br/>
            <br/>
            <div className='col-lg'>
                <div >
                <TextEffectts/>

                </div>
                <br/>
                <br/>
                <div>
                
                
                {/* <Button variant='primary' onClick={() => setStep(1)}>Getstarted</Button>
                {step === 1 && <Login/>} */}
                </div>
            </div>

        </div>
      
    </div>
  )
  }

export default Main

