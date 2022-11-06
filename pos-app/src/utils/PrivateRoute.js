import {Outlet, Navigate} from 'react-router-dom';



const PrivateRoute= () => {
    // let auth ={"token": false}
    return (
    localStorage.getItem("token") ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default  PrivateRoute;