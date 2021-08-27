import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Story from './story/Story';



const StoryBar = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const story = async () => {
      const res = await axios.get('/appapi/lt/topstories');
      setContent(res.data.data.splice(0, 13));
     
    };

    story();
  }, []);
  console.log(content);

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
                largeimage={item.n_large_image}
            />
        ))}
        </div>
      
       
     
    </div>
  );
};

export default StoryBar;