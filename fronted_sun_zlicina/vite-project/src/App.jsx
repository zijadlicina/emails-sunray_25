import { ToastContainer } from 'react-toastify';
import './App.css'
import EmailsPage from './views/EmailsPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>     
      <EmailsPage />
      <ToastContainer />
    </>
  )
}

export default App
