import AuthPost from '../Functions/AuthPost.js';
import './Signup.css'
import { useNavigate } from 'react-router-dom';

let navigate;

function signup(e){
  

    e.preventDefault();
  const data = new FormData(e.target);
  const obj = {};
  data.forEach((item,key)=>{
    obj[key] = item;
  })
  
  
  AuthPost('http://localhost:8000/Signup',obj)
  .then((res)=>{
     return  res.json();
  })
  .then((res)=>{
   if( res && res.redirect)  navigate('/login')
    else alert(res.message);
  })
  .catch((error)=>{
    console.log("error:"+error);
    alert('Already Exist');
  })
  
  }

export default function Signup() {
  navigate = useNavigate();
  return (
    <div className="auth">
    <h1 className="topic">Authenticator</h1>
     <form className="form" onSubmit={signup}>
      <div className="first">
        <label htmlFor="First_name">First Name:  </label>
         <input className="fname" name="First_name"></input>
      </div>
      <div className="second">
         <label htmlFor="Last_name">Last Name:  </label>
         <input className="fname" name="Last_name"></input>
      </div>   
      <div className="third">
         <label htmlFor="email">Email:  </label>
         <input className="email" placeholder="Enter Email" type="email" name="Email" required></input>
      </div>   
      <div className="fourth">
         <label htmlFor="Password">Password:  </label>
         <input className="password" placeholder="Enter Passowrd" type="password" name="Password" required></input>
      </div> 
      <button className="submit">Submit</button> 
     </form>
  </div>
  )
}

