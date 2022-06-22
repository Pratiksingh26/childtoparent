import React from 'react'
import { useState } from 'react'

const Form = (props) => {

const [name, setName] = useState("")

  const handleChange = (e) => {

    setName(e.target.value)
  }

  const handleClick = (e) => {

   e.preventDefault()
   props.onClick(name)

  }

  return (
    <div>
      <input type="text" placeholder='Enter Name' onChange={handleChange}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Form
