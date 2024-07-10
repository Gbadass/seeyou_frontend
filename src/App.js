import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {setUserAuth,resetUser} from './utils/slicers/userSlice'
import Layout from "./components/Layout";
import UserRouter from "./router";
import LoadingScreen from './utils/LoadingScreen'
import { loggedIn } from './utils/api/user_api'
import {addNotification} from './utils/slicers/notificationSlice'
import {setupAxiosInterceptors} from './utils/axiosInstance'
import { useEffect } from "react";


function App() {

  const dispatch = useDispatch();
  setupAxiosInterceptors(dispatch);
  const isLoading = useSelector((state)=> state.user.isLoading)
  const token = useSelector((state)=> state.user.token)


  const validateUserToken = async()=>{
    if(token){
      const {status,data,message} = await loggedIn()
      if(status){
        dispatch(setUserAuth({ user: data }));
      }else{
        dispatch(resetUser());
        dispatch(
            addNotification({
                type: "error",
                title: "Operation Failed!",
                description: message,
            })
        );
      }
    }else{
      dispatch(resetUser());
    }
  }

  useEffect(()=>{
    validateUserToken()
  },[])

  return (

<div>
{isLoading ? (
    // Show a loading screen while data is being fetched
    <LoadingScreen />
) : (
    // Render the actual content once data is loaded
    <UserRouter />
)}
</div>
  );
}

export default App;
