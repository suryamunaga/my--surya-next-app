import React from 'react'
import BasicExampleAccordion from '@/Accordion/Accordion'
import data from "./data.json"
 const Home = () => {
  return (
    <div> 
      < h1 className='text-center'>
        surya lover boy
        </h1>
        <BasicExampleAccordion data={data} title={"MY DATA"} />
        </div>
  )
}
export default Home