

import './index.css'
// import {useState} from 'react'
import {Link,useNavigate} from 'react-router'
const Start=()=>{
    // const[value,setState]=useState("")
    // const startClick=()=>{

    // }
    const navigate=useNavigate()
    const navigatetoHost = ()=>{
        navigate("/host")
    }

    return(
        <div className="bg-container">
            
                <h1>Live Quiz</h1>
                <p>Open multiple tabs to experience real-time updates</p>
                <Link to='/host'>
                    <button className='start-btn' onClick={navigatetoHost}>Start as Host</button>
                </Link>
                <Link to='/questions'>
                <button className='join-btn'>Join as Player</button>
                </Link>
                
            

        </div>
    )
}
export default Start;