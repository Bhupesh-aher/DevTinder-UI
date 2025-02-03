import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'
import axios from 'axios'

const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user)
  const fetchUser = async() => {
    try{
      if(userData) return;
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      })
      // console.log(res);
      
      dispatch(addUser(res.data))
    }
    catch(err){
      if(err.status === 401){
        navigate("/login");
      }
      // console.log(err); // error page
      
    }
  }

  useEffect(() => {
   
      fetchUser();
   
  }, [])

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body