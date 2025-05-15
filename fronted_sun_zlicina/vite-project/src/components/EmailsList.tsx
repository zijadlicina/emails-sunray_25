import React from 'react'
import { author } from '../services/library/author'
import "../styles/authorsLists.css"

const AuthorsLists: React.FC = ({emails}) => {
  return (
    <div className='authorsListDiv'>
        <h3 className='authorsListHeader'>Books of this author: </h3>
        {emails.map((it, id) => {
            return <div>
                <img  className='authorsListImage' alt="author avatar" />
                <span className='authorsListText'>{it.firstName} {it.lastName}</span>
            </div>
        })}
    </div>
  )
}

export default AuthorsLists