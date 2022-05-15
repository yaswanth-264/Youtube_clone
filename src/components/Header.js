import React ,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import "./Header.css";
import {Link} from "react-router-dom";
const Header = () => {
  const [inputText,setInputText]=useState("");
  return (
    <div className="header">
    <div className="header__left">
    <MenuIcon />
    <Link to={`/`}>
    <img className="header__logo" src="https://image.shutterstock.com/image-photo/image-260nw-281716448.jpg" alt="youtube logo" />
    </Link>
    </div>
    <div className="header__input">
   <input onChange={(e)=>setInputText(e.target.value)} value={inputText} type="text" placeholder="Search..."></input>
    <Link to={`/search/${inputText}`}>
    <SearchIcon className="header__inputButton"/>
    </Link>
    </div>
    <div className="header__icons"> 
    <VideoCallSharpIcon className="header__icon"/> 
    <AppsSharpIcon className="header__icon"/>
    <NotificationsIcon className="header__icon"/>
    <AccountCircleIcon className="header__icon"/>
    </div>
    </div>
  )
}

export default Header;