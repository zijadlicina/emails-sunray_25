import React, { useState } from 'react'
import { isValidEmailInput } from '../../../utilities'
import { Button } from '@mui/material'
import Chips from './Chips'
import "./AddForm.css"

const index = ({emailChips, setEmailChips}) => {
    const [nameField, setNameField] = useState({value: "", isValid: false})
    const [emailValidMessage, setEmailValidMessage] = useState("")
        
    const handleAddEmail = () => {
      setEmailChips((prev) => [...prev, nameField.value]);
    }
  return (
    <div className='addForm'>
        <form >
          <div className='addDivform'>
             <input placeholder='Email' value={nameField.value} onChange={(e) => { 
                let isValidEmail = isValidEmailInput(e.target.value)
                setEmailValidMessage("")
                setNameField({value: e.target.value, isValid: isValidEmail}); 
                setTimeout(() => {
                    if (!isValidEmail) {
                        setEmailValidMessage("Please insert a valid email input")
                    } 
                }, 3000)
            }}
            />
            <Button className='addFormButton' disabled={!nameField.isValid} variant="text" onClick={() => handleAddEmail()}>Add Email</Button>
          </div>
          {!nameField.isValid && emailValidMessage ? <span className='messageInvalidEmail'>{emailValidMessage}</span> : <span className='messageInvalidEmail'></span>}
        </form>
        {emailChips ? <Chips emailChips={emailChips} setEmailChips={setEmailChips}/> : <></> }
    </div>
  )
}

export default index