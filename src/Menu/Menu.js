import React from 'react'
import "./Menu.css"
import {menuIteam} from "./Configiration"
import Link from 'next/link'



 const Menu = () => {
  return <div>
   
    <ul className='menu'>
        {
            menuIteam.map(({name,link},index)=>{
                return <li key={`li_${index}`}>
                    <Link href={link}>{name}</Link>
                    </li>
                
            })
        }
        
    </ul>
   
  </div> 
}
export default Menu
