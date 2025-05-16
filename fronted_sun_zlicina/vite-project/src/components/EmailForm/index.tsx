import React, { useEffect, useState } from 'react'
import Add from './Add'
import Send from './Send'
import "./EmailForm.css"

const EmailForm = () => {
  const [emailChips, setEmailChips] = useState<string[]>([])

  return (
    <div className='emailForm'>
        <h2 className='header'>Add Emails to Database</h2>
        <Add emailChips={emailChips} setEmailChips={setEmailChips}/>
        <Send emailChips={emailChips}/>
    </div>
  )
}

export default EmailForm