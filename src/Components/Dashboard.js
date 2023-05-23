import React from 'react'
// import Appheader from './Appheader' 
// import Appfooter from  "./Appfooter"
// import Pagecontent from './Pagecontent'
import Sidemenu from "./DashboardPages/Sidemenu"
// import Speeddials from "./DashboardPages/Speeddials"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Images from './DashboardPages/Images'
import AddDesign from "./DashboardPages/AddDesign"
import { Admin } from 'react-admin'

function Dashboard() {
  return (
   
  <div className='container'>
    <Sidemenu/>
    <div className='row'> 
    <div className='col-lg-6'>
   
   <Admin/>
   
    </div>
    <div className='col-lg-6'>
  
   
    </div>
    
   <div className='row'>
    <div className='col-lg-6'>
    
    </div>
    <div className='col-lg-6'>
  
      
    </div>
    </div>

   </div>

    </div>
  
  
  
  
  
  








)}

export default Dashboard
