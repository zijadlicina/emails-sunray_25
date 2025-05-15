import { useEffect, useState } from 'react'
import { email, getAllEmails } from '../services/users/emails'
import React from 'react'

const Emails = () => {
  const [emails, setEmails] = useState<email[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<String>("")

  useEffect(() => {
    const fetchAuthors = async (): Promise<void> => {
      setIsLoading(true)
      try {
        const results: any = await getAllEmails()
        setEmails(results.data)
      } catch (error: any) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAuthors()
  }, [])

  return (
    <div className="divItems">
      <div className='headerItems'>
        <h1 className='textHeader'>Most Frequently Send Emails</h1>
      </div>
        <div className='itemsTable'>
          {emails.map((email, it)=>{
            return <div className='headerItems' style={{display: "flex", justifyContent: "space-between"}}>
              <span>{email.id}</span>
              <h3 className='textHeader'>{email.name}</h3>
              <div>
          </div>{email.repeat.toString()}</div>
          })}
        </div>
    </div>
  )
}

export default Emails
