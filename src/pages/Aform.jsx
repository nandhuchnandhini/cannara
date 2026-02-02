import React from 'react'
import '../pages/aform.css'

const Aform = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    
    alert('Application submitted — thank you!')
    e.target.reset()
  }

  return (
    <div id="apply">
      <form onSubmit={handleSubmit}>
        <h2>Apply for a Loan</h2>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" required />
        <br></br>
        <label htmlFor ="account">Account Number:</label>
        <input type="text" id="account" name="account" required />
        <br></br>
        <label htmlFor="loanType">Loan Type:</label>
        <select id="loanType" name="loanType" required>
          <option value="">Select Loan Type</option>
          <option value="home">Home Loan</option>
          <option value="personal">Personal Loan</option>
          <option value="education">Education Loan</option>
        </select> 
        <label htmlFor="amount">Loan Amount:</label>
        <input type="number" id="amount" name="amount" required />
        <br></br>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  )
}

export default Aform