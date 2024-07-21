import React from 'react'

const PatientRegisteration = () => {
  return (
    <form action="">
      <div>
        <label htmlFor="">First Name</label>
        <input type="text" className='form-control' />
      </div>

      <div>
        <label htmlFor="">Last Name</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>
    </form>
  )
}

export default PatientRegisteration