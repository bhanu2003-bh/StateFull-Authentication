import { useEffect, useState,useRef } from "react"
import { useNavigate } from "react-router-dom";
import UID from "../UniversalValues/Uid";
import AuthPost from "../Functions/AuthPost.js";
import AuthGet from "../Functions/AuthGet.js";






export default function Data() {
 
  const [data,setdata] = useState([]);
  const [inputdata,setinputdata] = useState('');
  const [states,setstates] = useState(true);
let navigate = useNavigate();



useEffect(()=>{
  if(!document.cookie || UID.getter()!=document.cookie)  {
    navigate('/login')
  }
},[])

useEffect(()=>{

  if(!document.cookie || UID.getter()!=document.cookie)  {
    console.log("Called Navigate");
    navigate('/login')
  }
const fetechdata = async() =>{
 await AuthGet('http://localhost:8000/data')
    .then((response)=>{
      return response.json();
    })
    .then((response)=>{
        let arr = [];
        response.forEach((values)=>{
            arr.push(values.Message);
        })
        console.log(arr);
        setdata(arr);
    })
    .catch(()=>{
      console.log("Unable To fetch data");
    })
}
fetechdata();
},[states])

async function senddata(e){
   try {
  const response =  await AuthPost('http://localhost:8000/data',{message:inputdata});
   setstates((prev)=>!prev);
    setinputdata('');
   } catch (error) {
     console.log("error in sending data")
   }
}


    
  return (
    <div>
      <h1>Session Id</h1>
      <input onChange={(e)=>setinputdata(e.target.value)} value={inputdata}></input>
      <button onClick={senddata}>Submit</button>
      <br></br>
       <ul>
       {data.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
       </ul>
    </div>
  )
}
