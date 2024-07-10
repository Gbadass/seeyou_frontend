import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./routes";

const UserRouter = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userRoles = useSelector((state) => state.user.user?.user_roles);

  const renderRoute = (route) => {
    // redirect to the login page if not authenticated
    if (!isAuthenticated) {
      if (route.path != "/login") {
        return <Navigate to="/login" />;
      }
    }

    // Render the route component
    return <route.component />;
  };

  return (
    <Router>
      <Routes>
        {!isAuthenticated && (
          // If not authenticated, route to login
          <Route path="*" element={<Navigate to="/login" />} />
        )}
  
        {isAuthenticated && (
          // If authenticated, route to dashboard
          <Route path="*" element={<Navigate to="/eventtypes" />} />
        )}
  
        {routes.map((route) => (
          <React.Fragment key={route.path}>
            {/* Render the parent route */}
            <Route path={route.path} element={renderRoute(route)} />
  
            {/* Check for and render child routes */}
            {route.children && route.children.length > 0 && route.children.map((childRoute)=> (
              <Route key={childRoute} path={`${route.path}/${childRoute.path}`} element={<childRoute.component/>} />
            ))}
          </React.Fragment>
        ))}
      </Routes>
    </Router>
  );
};



export default UserRouter;
