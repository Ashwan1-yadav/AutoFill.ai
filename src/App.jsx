import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Changelog from './pages/Changelog';
import Documentation from './pages/Documentation';
import Support from './pages/Support';





const App = () => {
  return (
     <>
     <Header />
    <div>

    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Documentation' element={<Documentation />}/>
        <Route path='/Support' element={<Support />}/>
        <Route path='/Changelog' element={<Changelog />}/>
        
        
        
        
        
        

        

      </Routes>
    </div>
    </>
  )
}


export default App
