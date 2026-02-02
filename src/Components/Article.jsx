import React, { useState } from 'react'
import '../Components/article.css'
import Aform from '../pages/Aform.jsx'
import  account from '../../public/Images/account.jpg'

const Article = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div id="article" >
     
        <h4>Account Section</h4>
        <section id="home">In banking, the "accounts section" (or accounts department) refers 
          to the internal division responsible for managing customer accounts, financial records, and related
           operations. This isn't a customer-facing area like a teller counter but a back-office function ensuring 
           accuracy in transactions, 
          compliance, and reporting. It's often part of the operations or finance team.</section>
        
            <div className="acc">
              <img src = {account} ></img></div>
            
           <div className='Link'>
            {!showForm ? (
              <button className="apply-btn" onClick={() => setShowForm(true)}>Apply</button>
            ) : (
              <div>
                <button className="apply-btn" onClick={() => setShowForm(false)}>Close</button>
                <Aform />
              </div>
            )}
             </div>
         
           </div>
      
        
  )
}

export default Article