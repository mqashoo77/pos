import React from 'react'
/////css
import './Layout.css'
function Layout() {
  return (

    <aside>
        <div className='page-nav'>
            <button>Dashboard</button>
            <button>Categories</button>
            <button>Products</button>
        </div>
        <div className='logout-btn'>
            <button>Logout</button>
        </div>
       
    </aside>
    
  )
}

export default Layout