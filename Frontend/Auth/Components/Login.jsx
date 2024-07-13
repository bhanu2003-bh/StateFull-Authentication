import "./Login.css";
import AuthPost from "../Functions/AuthPost.js";
import { useNavigate } from "react-router-dom";
import UID from '../UniversalValues/Uid.js'



let navigate;
function LoginUser(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const obj = {};
  data.forEach((item, key) => {
    obj[key] = item;
  });

  AuthPost("http://localhost:8000/Login", obj)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res && res.uid) {
        document.cookie = res.uid;
        UID.setter(res.uid);
        navigate('/data');
      }
    })
    .catch((error) => {
      console.log("Error:" + error);
    });
}

export default function Login() {

  navigate = useNavigate();

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="form" onSubmit={LoginUser}>
        <div className="login_email">
          <label>Email:</label>
          <input className="email1" type="email" name="Email" required></input>
        </div>
        <div className="login_password">
          <label>Passowrd:</label>
          <input
            className="password1"
            type="password"
            name="Password"
            required
          ></input>
        </div>
        <button className="login_submit">Submit</button>
      </form>
    </div>
  );
}
