import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import templateimg from '../resources/templates/template1.png'
import template2img from '../resources/templates/template2.png'
import template3img from '../resources/templates/template3.png'
import template4img from '../resources/templates/template4.png'
import template5img from '../resources/templates/template5.png'

import '../resources/templates.css'
import { useNavigate } from 'react-router-dom'

function TemplatesPage() {
    const navigate = useNavigate()
    const templates=[
       {
         title:'Simple Resume',
         image: templateimg,
       },
       {
         title:'Highlighted Section Resume',
         image: template2img,
       },
       {
         title:"Highlighted Blue section Resume",
         image: template3img,
       },
       {
         title:"Customized Resume 1",
         image: template4img,
       },
       {
         title:"Customized Resume 2",
         image: template5img,
       },
     ];
     return (
       <DefaultLayout>
           <div className='row home'>
             {templates.map((template , index)=> {
               return <div className='col-md-4'>
                 <div className='template'>
                 <img src={template.image} height='400'  alt='' style={{width:'100%'}} />
                 <div className='text'> 
                 <p>{template.title}</p>
                 <button onClick={()=> navigate(`/templates/${index + 1}`)}>Try</button>
                 </div>
                 </div>
               </div>
             })
             }
   
           </div>
       </DefaultLayout>
     )
   }
   

export default TemplatesPage