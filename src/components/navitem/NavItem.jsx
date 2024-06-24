import React from 'react'
import './Navitem.css'

const NavItem = () => {
    const item = ["Chegirmalar", "Konditsionerlar", "Telefonlar" ,"Maishiy texnika","Kitoblar","Televizorlar","Noutbuklar"]
    let items = item.map((item, index) => (
             <p key={index}>{item}</p>
    ))
  return (
   <>
 <section className='nav_item-section'>
 <div className="container">
       <div className="nav_item">
          {items}
       </div>
     </div>
 </section>
   </>
  )
}

export default NavItem