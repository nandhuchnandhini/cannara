import React from 'react'
import '../pages/gform.css'

const Gform = () => {
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
            <h2>Gold Loan Application Form</h2>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />    
            <br></br>   
            <label htmlFor="account">Account Number:</label>
            <input type="text" id="account" name="account" required /> 
            <br></br>   
            <label htmlFor="goldWeight">Gold Weight (in grams):</label>
            <input type="number" id="goldWeight" name="goldWeight" required /> 
            <br></br>   
            <label htmlFor="loanAmount">Requested Loan Amount:</label>
            <input type="number" id="loanAmount" name="loanAmount" required /> 
            <br></br>   
            <button type="submit">Submit Application</button>
        </form>
    </div>
    </div>
  )
}

export default Gform