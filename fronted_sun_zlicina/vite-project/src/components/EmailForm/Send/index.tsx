import { Tooltip, Button } from '@mui/material'
import { PiShoppingCartBold } from "react-icons/pi";
import { createEmails } from '../../../services/users/emails';
import { toast } from 'react-toastify';
import "./Send.css"

type SendProps = {
  emailChips: string[]
}
const index = ({emailChips}: SendProps) => {

  const submitHandler = () => {
    try {
      const postEmailChips = async () => {
        const res = await createEmails(emailChips)
        console.log("rest", res)
      }
      toast.promise(postEmailChips,{
        success: 'Sucessfully inserted or updated emails in database!',
        error: 'Please insert emails that not belong to blacklist domains!',
    })
    } catch (error) {
      console.log(error)
    }
  }

  if (emailChips.length < 3){
    return <div className='sendDiv'>
      <Tooltip title = "Please insert at least 3 emails">
        <span>
          <Button className='sendButton' disabled={emailChips.length < 3}>
          <PiShoppingCartBold />
          Send Emails
        </Button>
        </span>
      </Tooltip>
    </div>
  }
  return (
  <div className='sendDiv'>
    <span onClick={submitHandler}>
      <Button className='sendButton'>
        <PiShoppingCartBold />
        Send Emails
      </Button>
    </span>
  </div>
  )
}

export default index