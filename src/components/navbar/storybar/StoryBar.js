import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Story from './story/Story';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './storybar.css'
import Stories from 'react-insta-stories';


const StoryBar = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const story = async () => {
      const res = await axios.get('/appapi/lt/topstories');
      setContent(res.data.data.splice(0, 13));
      console.log(res.data.data);
    };

    story();
  }, []);

  return (
    <div className='container-fluid' style={{ backgroundColor: '#F4F4F4' ,marginBottom:"30px"}}>
      <p style={{fontSize:"18px",fontWeight:"500"}}>स्टोरी</p>

     
     
      <div className="stories" style={{ display: 'flex', overflow: 'scroll' }}>
        {content.map((item) => (
            <Story
                image={item.n_small_image}
                key={item.n_id}
                title={item.n_title}
                link={item.n_share_link}
            />
        ))}
        </div>
      
       
     
    </div>
  );
};

export default StoryBar;