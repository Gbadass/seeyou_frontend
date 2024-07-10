import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from './routes'

const userRouter = ()=>{
  const isAuthenticated = useSelector((state)=> state.user.isAuthenticated)
  const userRoles = useSelector((state) => state.user.user?.user_roles)

  const renderRoutes = (route) => {
    // redirect to the login page if not authenticated
    if(!isAuthenticated){
      if(route.path != '/login') {
        return <Navigate to="/login" />;
      }
    }
  }
}
