import React from 'react'
import { useNavigate } from "react-router-dom";
/////css
import '../assets/Layout.css'

function Layout(props) {

  const navigate = useNavigate();
  return (

    <aside>
        <div className='nav-btn'>
            <button>Dashboard</button>
            <button>Categories</button>
            <button>Products</button>
        </div>
        <div className='logout-btn'>
            <button onClick={ () => props.signOut()}><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
        </div>
       
    </aside>
    
  )
}

export default Layout