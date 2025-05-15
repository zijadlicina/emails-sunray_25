import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material';
import Emails from './views/Emails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [nameField, setNameField] = useState({value: "", validation: false})

  const handleSubmit = () => {
    let newEmail = {
      name: name
    }
    if (nameField){
      console.log("newEmail", newEmail)
      const postEmail = async () => {
        await createOneEmail(newEmail)
        toast.promise(postEmail, {
          pending: 'Loading',
          success: 'Sucussfully created new email',
          error: 'Error when creating new email',
       })
       setNameField("")
       }
    }
  }
  return (
    <>
      <h3>Add Email to Database</h3>
      <ToastContainer />
      <input placeholder='Email' value={nameField} onChange={(e) => setNameField({value: e.target.value, validation: false})}/></input>
      <Button variant="text">Add Email</Button>
      <Button variant="text" onClick={() =>handleSubmit()}>Send Emails</Button>
      <Emails />
    </>
  )
}

export default App
