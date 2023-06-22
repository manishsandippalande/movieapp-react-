import React from 'react'

export default function Header() {
  return (
    <nav>
      <div className="navbar">
        <div className="left">
            <button className='home'>Home</button>
            <button className='allmovies'>All Movies</button>
            <button className='boxoffice'>Box-Office</button>
            <button className='admin'>Admin</button>
        </div>
      </div>
    </nav>
  )
}
