

import './App.css'
import Start from './components/Start/index.jsx'
import Host from './components/Host/index.jsx'
import Questions from './components/Questions/index.jsx'
import {BrowserRouter,Routes,Route} from 'react-router'
function App() {
  

  return (
    // <Questions/>
    <BrowserRouter>
      {/* <Start/> */}
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/host' element={<Host/>}/>
        <Route path='/questions' element={<Questions/>}/>
      </Routes>

      
    </BrowserRouter>
  )
}

export default App
