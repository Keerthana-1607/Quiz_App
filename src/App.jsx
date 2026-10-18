import './App.css'
import Start from './components/Start/index.jsx'
import Questions from './components/Questions/index.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login/index.jsx'
// basename="/Quiz_App"
function App() {
  return (
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/start" element={<Start/>} />
          <Route path='/questions' element={<Questions/>}/>
        </Routes>
      </BrowserRouter>
  )
}
export default App;
