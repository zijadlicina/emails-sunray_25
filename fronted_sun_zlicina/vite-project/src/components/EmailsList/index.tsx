import React, { useEffect, useState } from 'react'
import "./EmailsList.css"

const EmailsList = ({emails, setEmails}) => {
  let top10Emails = emails.sort((a, b) => b.repeat - a.repeat).slice(0, 10);

  return (
    <div>
      <div>
        <h2>Most Frequently Send Emails</h2>
      </div>
        <table>
          <tr>
            <th>NO</th>
            <th>Email</th>
            <th>Repeats</th>
          </tr>
          {top10Emails.map((email, it)=>{
            return <tr>
              <td>{it + 1}</td>
              <td >{email.name}</td>
              <td>{email.repeat.toString()}</td>
            </tr>
          })}
        </table>
    </div>
  )
}

export default EmailsList