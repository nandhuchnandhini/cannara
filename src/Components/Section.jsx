import React from 'react'
import cash from '../../public/Images/cash2.jpg'
import '../Components/section.css'
import Cform from '../pages/Cform.jsx'
import { useState } from "react";




const Section = () => {
  const [showForm, setShowForm]= useState(false)
 return (
    <div id="san">
      <p>CashSection</p>
      <section id="CashSection">In banking, the "cash section" typically refers to the area or department responsible for handling physical cash transactions, storage, and processing. 
          This isn't a universal term but often 
          describes parts of a bank's operations. Here's a breakdown of what it might involve:
          
            <li>Handling cash deposits and withdrawals</li>
            <li>Managing cash inventory and storage</li>
            <li>Processing cash-related transactions</li>
            <li>Ensuring security and compliance</li> 
            </section>

     
      <div id="cash">
         <img src= {cash}></img>
         <div id='link'>
         {!showForm ? (
              <button className="apply-btn" onClick={() => setShowForm(true)}>Apply</button>
            ) : (
              <div>
                <button className="apply-btn" onClick={() => setShowForm(false)}>Close</button>
        <Cform /> 
      </div>
            )}
      </div>
    </div>
    </div>
    
  )
}

export default Section