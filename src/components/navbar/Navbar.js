import React from 'react';
import SearchBar from './searchbar/SearchBar';
import StoryBar from './storybar/StoryBar'
import header from '../../Images/Assets-LT/Lallantop.jpg';
import './navbar.css';
import heading from '../../Images/Assets-LT/heading.jpg';
import Submenu from './searchbar/Menu/SubMenu/submenu';

const Navbar = ({ business, news, liveshow, home ,path,all,article,video}) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className="row">
        <div className="col-sm-4 col-md-2" style={{textAlign: 'center'}}><img src={header} className='header' /></div>
        <div className="col-sm-8 col-md-10" style={{textAlign: 'center'}}><img src={heading} className='heading' /></div>
      </div>
      <SearchBar
        business={business}
        news={news}
        liveshow={liveshow}
        home={home}
        path={path}
        all={all}
        article={article}
        video={video}
        
      />
      <StoryBar />
    </div>
  );
};

export default Navbar;
