import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

  const handleLogin = () => {
    if (username === "Keerthi" && password === "1234") {
      navigate("/start");
    } 
    else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="bg-container">
      <div className="login-card">
        <h1>Login Form</h1>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;

// import { useState } from 'react';
// import './login.css'
// import { Navigate,useNavigate} from 'react-router'

// const Login = () =>{
//     const[username,setUserName]=useState("");
//     const[password,setPassword]=useState("");
    
//     if(username === "Keerthi" && password==="1234"){
//         useNavigate("/start");
//     }
//     else{
//         alert("Invalid Username or password");
//     }
//     return(
//         <div className='bg-container'>
//             <div className="login-card">
//                 <h1>Login Form</h1>
//                 <form>
//                     {/* <label>Username:</label> */}
//                     <input type="username" placeholder="Enter username"/><br/>
//                     {/* <label>Password:</label> */}
//                     <input type="password" placeholder="Enter password"/>
                    
//                 </form>
//                 <button>Login</button>
//             </div>
//         </div> 
//     )

// }
// export default Login;