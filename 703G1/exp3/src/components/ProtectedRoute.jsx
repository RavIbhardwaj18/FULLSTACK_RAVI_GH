
import {Navigate} from 'react-router'

function ProtectedRoute() {

  const navigate =  Navigate();
  const isLoggedin = localStorage.getItem("isLoggedin");
  if(isLoggedin){
   navigate = useNavigate();
   
  }
    return (

  )
}

export default ProtectedRoute