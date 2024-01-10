"use client"
import React from 'react'


const AccordianItem=({name,age,activeAccordianItemNo,index,fnClick})=>{
           
   return <>
      <h3 onClick={()=>fnClick(index)} className="text-white bg-primary cursor-pointer">{name}</h3>
      {activeAccordianItemNo==index && <h5>{age}</h5>}
   </>
}


            export   const AccordianMine=({data,title})=>{
               const [activeAccordianItemNo,setActiveAccordianItemNo]=React.useState(0);
               const fnClick=(accordianItemNo)=>{
                    if(activeAccordianItemNo==accordianItemNo){
                     setActiveAccordianItemNo(-1)
                    }else{
                     setActiveAccordianItemNo(accordianItemNo)
                    }
               }
               return <>
               <h1>{title}</h1>
                  {
                     data?.map((obj,index)=>{
                        return <AccordianItem key={index} {...obj} fnClick={fnClick} index={index} activeAccordianItemNo={activeAccordianItemNo} />
                     })
                  }
               </>
        }
  


