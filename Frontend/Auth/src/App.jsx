import "./App.css";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../Components/Home";
import Data from "../Components/Data";



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element = {<Home></Home>}></Route>
      <Route path="/signup" element = {<Signup></Signup>}></Route>
      <Route path="/login" element = {<Login></Login>}></Route>
      <Route path="/data" element ={<Data></Data>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
