import {Outlet, Navigate} from 'react-router-dom'

export default function PrivateRoute() {

    const isLogin = false;

  return isLogin == true ? <Outlet /> : <Navigate to="/signin" /> ;
}
