import React from 'react'
import '../pages/cform.css'
const Cform = () => {
   const handleSubmit = (e) => {
    e.preventDefault()
    
    alert('Application submitted — thank you!')
    e.target.reset()
  }

  return (
    <div id="apply">
      <form onSubmit={handleSubmit}></form>
    <div>
        <form>
            <h2>Cash Withdrawal Form</h2>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />
            <br></br>   
            <label htmlFor="account">Account Number:</label>
            <input type="text" id="account" name="account" required />
            <br></br>   
            <label htmlFor="amount">Withdrawal Amount:</label>
            <input type="number" id="amount" name="amount" required />
            <br></br>   
            <button type="submit">Submit Application</button>
        </form>
    </div>
    </div>
  )
}

export default Cform
