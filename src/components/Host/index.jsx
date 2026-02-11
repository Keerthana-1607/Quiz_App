import './index.css'
import {Link,useNavigate} from 'react-router'
const Host=() =>{
    return(
        <div className="card">
            <h1>Host Dashboard</h1>
            <p>Total Questions: 10</p>
            <Link to='/questions'>
                <button className="start-btn">Start Quiz</button>
            </Link>
            <button className="next-btn">Next Question</button>
            <button className="reset-btn">Reset</button>
        </div>
    )
}
export default Host;