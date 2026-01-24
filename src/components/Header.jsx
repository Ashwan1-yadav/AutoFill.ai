import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (<nav className="flex items-center justify-between px-8 py-4 bg-[#0a0a0c] text-white border-b border-gray-800">

  <div className="flex items-center gap-2">
    <div className="bg-[#6333FF] p-1.5 rounded-lg">
    
      <svg 
        width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    </div>
    <span className="text-xl font-bold tracking-tight">QuickForm</span>
    
  </div>

  
  <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
    <Link to="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
      <span>🏠</span> Home
    </Link>
    <Link to="/Documentation" className="flex items-center gap-1.5 hover:text-white transition-colors">
      <span>📚</span> Services we offer
    </Link>
    <Link to="/Support" className="flex items-center gap-1.5 hover:text-white transition-colors">
      <span>❓</span> Support
    </Link>
    < Link to="/Changelog" className="flex items-center gap-1.5 hover:text-white transition-colors">
      <span>📝</span> Changelog
    </Link>
    
  </div>
  

  
  <div className="flex items-center gap-6">
   
    <div className="hidden sm:flex items-center gap-4 text-gray-400 border-r border-gray-700 pr-6">
      <a href="#" className="hover:text-white transition-colors"><i className="fab fa-discord"></i></a>
      <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
      <a href="#" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
    </div>

  
    <div className="flex items-center gap-4">
      <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
        Sign In
      </button>
      <button className="bg-[#6333FF] hover:bg-[#5228e0] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-purple-500/20">
        Sign Up
      </button>
     

            
        
    

       
    
    </div>

  </div>
</nav>
    
  )
}

export default Header

