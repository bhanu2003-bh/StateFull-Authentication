import './Home.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
  return (
    <div className='home'>
        <h1>CodeEarth Arena</h1>
       <button className='signup_redirect' onClick={()=> {navigate('/signup')}}>Signup</button>
       <br></br>
       <button className='login_redirect' onClick={()=> {navigate('/login')}}>Login</button>
    </div>
  )
}
