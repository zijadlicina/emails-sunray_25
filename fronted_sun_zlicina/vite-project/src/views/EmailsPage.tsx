import { useEffect, useState } from 'react'
import { createOneEmail, email, getAllEmails } from '../services/users/emails'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import EmailForm from '../components/EmailForm'
import EmailsList from '../components/EmailsList'
import "./EmailsPage.css"

const EmailsPage = () => {
    const [emails, setEmails] = useState<email[]>([])
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [error, setError] = useState<String>("")

    useEffect(() => {
      const fetchEmails = async () => {
        try {
          const results: any = await getAllEmails()
          setEmails(results.data)
        } catch (error: any) {
        } finally {
          setIsLoading(false)
        }
      }
      fetchEmails()
    }, [emails])
  return (
    <div className='emailsPage'>
      <EmailForm />
      {isLoading ? <span>Loading</span> : <EmailsList emails={emails} setEmails={setEmails} />}
    </div>
  )
}

export default EmailsPage
