

import './App.css'
import Start from './components/Start/index.jsx'
import Host from './components/Host/index.jsx'
import Questions from './components/Questions/index.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login/login.jsx'
function App() {
  

  return (
      // <Questions/>
      <BrowserRouter basename="/Quiz_App">
        {/* <Start/> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/start" element={<Start/>} />
          
          <Route path='/host' element={<Host/>}/>
          <Route path='/questions' element={<Questions/>}/>
        </Routes>

        
      </BrowserRouter>
    
  )
}

export default App;
