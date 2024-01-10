import React from 'react'
import BasicExampleAccordion from '@/Accordion/Accordion'
import { AccordianMine } from '@/Accordion/AccordianMine'
import data from "./data.json"
 
 const About = () => {
  return (
    <div>
      
       <h1 className='text-center'>
       gayathri loves surya
    </h1>
    
    <BasicExampleAccordion data={data.FATHERS} title="FATHER"/>
    <BasicExampleAccordion data={data.SONS} title="SONS"/>
        
    <AccordianMine  data={data.SONS} title="SONS"/>
    
        
        </div>
  )
}
export default About