import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';
import bemolDigital from '../../assets/bedigital .png';
import { useEffect, useState } from 'react';
import  ModemContainer  from "../ModemContainer";
import { render,ReactDOM } from "react-dom";

const TopNavigation = () => {
  return (
    <div className='top-navigation'>
      <img src={ bemolDigital } width={'150'} height={'1500'}></img> 
      <Search />
      <ThemeIcon />
      <UserCircle />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};



const Search = () => {
  const [ searchTerm, setSearchTerm ] = useState("");  
  //console.log(searchTerm);
  useEffect(()=>{
    const Finder = async () => {  
      return(
        render(<ModemContainer props={searchTerm}/>,  document.getElementById('containerModem'))        
      );
    };
      Finder();
  }) 
  return(
  <div className='search'>
    <input className='search-input' type='text' placeholder='Pesquisar...' onChange={(event)=> {setSearchTerm(event.target.value)}}
    />
    <FaSearch size='18' className='text-secondary my-auto'/>
  </div>
  );
  
};
  
const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
const HashtagIcon = () => <bemolDigital size='20' className='title-hashtag' />;

export default TopNavigation;
