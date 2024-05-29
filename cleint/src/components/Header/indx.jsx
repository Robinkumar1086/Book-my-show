import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useSelector , useDispatch} from "react-redux";
import { jwtDecode } from 'jwt-decode';
import {resetUser, setUser} from "../../store/slices/userSlice";

const Header = () => {
    
    const [showDropdown , setshowDropdown] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.user)

    useEffect(()=>{
      const token = localStorage.getItem("scaler-token");
      if(token){
       const decode = jwtDecode(token)
       dispatch(setUser(decode))
      }        
    } , []
  )

   function toggleDropdown(){
       setshowDropdown(!showDropdown);
   }
   function logout(){
    localStorage.removeItem("scaler-token");
    dispatch(setUser(resetUser));
    navigate("/login");
   }
   function firstCapitalLetter(name){
    if(!name) return ' ';
    return name.charAt(0).toUpperCase();
   }
    
  return (
    <nav className='bg-primary-subtle'>
        <div className="container-fluid">
        <div className='logo'>
            <Link to={"/"}>BOOK YOUR SHOW</Link>
        </div>
        <div className='nav-items'>
            <div className='profile' onClick={toggleDropdown}>
              {user? firstCapitalLetter(user.name) : "User"}
              </div>
             {showDropdown && (
                <div  className='dropdown-list '>
                    <Link onClick={toggleDropdown} to={user?.role === true ? "/admin" : "/user"}>
                      {user?.role === true ? "Admin Panel" : "Profile" }
                      </Link>
                    <button onClick={logout}>Log Out</button>
                </div>
             )}
        </div>
        </div>
    </nav>
  )
}

export default Header;