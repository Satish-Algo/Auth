import { useEffect, useState } from 'react';
import authService from '../src/appwrite/auth'
import { useDispatch } from "react-redux";
import { login,logout} from "./store/authSlice"
const App = () => {
 const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  
    useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
      dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((error)=>{
      console.log("error :: user Not login :: ", error);
    })
    .finally(()=>setLoading(false))
  },[])
  
  return !loading ? (
    <div className='bg-red-400'>appphggg</div>
  ) :(null)
};

export default App;
