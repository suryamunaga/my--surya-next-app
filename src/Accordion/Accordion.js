"use client"
import { Fragment } from 'react';
import Accordion from 'react-bootstrap/Accordion';


function BasicExampleAccordion({data,title}) {
  return <Fragment>
    
    <h1>{title}</h1>
    <Accordion defaultActiveKey="0">
     {
      data.map(({name,age},index,oa)=>{
        return <Accordion.Item  key={`acc_${index}`} eventKey={index}>

        <Accordion.Header>{name}</Accordion.Header>
        <Accordion.Body>
          {age}
          
          
        </Accordion.Body>
      </Accordion.Item>
      })
     }
     
    </Accordion>
  </Fragment>
}

export default BasicExampleAccordion;