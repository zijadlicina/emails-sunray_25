import React from 'react'
import { IoClose } from "react-icons/io5";
import "./Chips.css"

const Chips = ({emailChips, setEmailChips}) => {
    console.log("chips", emailChips)
  return (
    <div className='chipsDiv'>
        {emailChips.map((name, id) => {
            return <div className='chipItem'>
              <span key={id}>{name}</span>
              <IoClose className="remove" onClick={() => {
                  setEmailChips((prev) => prev.filter((email) => email !== name));
              }}/>
            </div>
        })}
    </div>
  )
}

export default Chips