import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
    <Link to="/personal-info"
      className="bg-blue-500 text-white text-4xl font-bold py-6 px-12 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 animate-pulse"
    >
      Start
    </Link>
  </div>
  )
}

export default Home