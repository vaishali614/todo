import React, { useState } from 'react';
import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
} from '@fortawesome/fontawesome-free-solid';
import noti from '../../../Images/Assets-LT/Vector.png';
import Menu from '../searchbar/Menu/menu';
import Submenu from './Menu/SubMenu/submenu';

const SearchBar = ({ business, news, liveshow, home ,article,video}) => {

  const [search,setSearch]=useState("");

  const onChange=(e)=>{
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const handleClick=()=>{

  }
  const filterOpen=(e)=>{
      alert("Adding the Filter Option" 
      + " "+ search);
  }
  return (
    <div className='container-fluid searchbar'>
      <span>
        <FontAwesomeIcon className='hamburger1' icon={faBars} size='2x' onClick={handleClick}  />
      </span>
      <input type='text' placeholder='Search news,videos audios and hashtags'  onChange={onChange} onKeyPress={filterOpen} />
      <img  src={noti} className='notify' />
      <Menu business={business} news={news} liveshow={liveshow} home={home} search={search} article={article} video={video} />
      
    </div>
  );
};

export default SearchBar;