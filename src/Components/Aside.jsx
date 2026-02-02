import React from 'react'
import  Gold from '../../public/Images/Gold.jpg'
import './aside.css'  
import Gform from '../pages/Gform'   
 import { useState } from 'react'  

const Aside = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div><h5>Gold Loan Section</h5>
    <section id="GoldLoanSection">A gold loan (also called a gold-backed loan or pawn loan) is a secured 
      loan where you pledge gold jewelry, coins, or bullion as collateral. Banks appraise the gold's 
      value and lend a percentage of it (typically 70-90%), with the gold held in the bank's vault until 
      repayment. This is common in India, Southeast Asia, and some
       Western countries, often used for personal
        or business needs like emergencies or investments.</section>
    
    
    <div id="dhu">
    <img src = {Gold} ></img></div>
    <div className='Link'>
      {!showForm ? (
              <button className="apply-btn" onClick={() => setShowForm(true)}>Apply</button>
            ) : (
              <div>
                <button className="apply-btn" onClick={() => setShowForm(false)}>Close</button>
      <Gform />
    </div>
            )}
    </div>
    </div>
    
  )
}

export default Aside