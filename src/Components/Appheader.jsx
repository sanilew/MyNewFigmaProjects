import { Menu, Space } from 'antd'
import React from 'react'
// import "./myAppheader.css"
// import Pagecontent from './Pagecontent'
// import Appfooter from './Appfooter'
import {HomeFilled} from "@ant-design/icons"
// import { useNavigate } from 'react'
import Mypost from './Myposts'

function Appheader() {
  
  return (
    <>
    <div className='appheader'>
    <Space >
    <Menu
    //  onClick={onMenuClick}
     mode='horizontal'
     items={[
      {label:<HomeFilled/>, key:"product"},
      {label:"Products", key:"product",
      children:[

{   label:"Figma" ,key:"figma"} ,
{   label:"Design" ,key:"figma"} ,
{   label:"Prototyping" ,key:"figma"} ,
{   label:"Design systems" ,key:"figma"} ,
{   label:"Downloads" ,key:"figma"} ,
{   label:"FigJam" ,key:"figma"} ,
{   label:"Online whiteboarding" ,key:"figma"}, 
{   label:"Strategic planning" ,key:"figma"}, 
{   label:"Team meetings" ,key:"figma"}, 
{   label:"Diagramming" ,key:"figma"}      ]
    },
      {label:"Enterprise", key:"enterprise",
    children:[
      {   label:"Overview" ,key:"figma"} ,
{   label:"Customers" ,key:"figma"} ,
{   label:"Contact Sales" ,key:"figma"}
    ]},
    {label:"Pricing", key:"price"},
      {label:"Community", key:"product"},
      {label:"Company", key:"product"},
      

     ]}/>
    </Space>
    </div>
   
   </>
  )
}

export default Appheader
