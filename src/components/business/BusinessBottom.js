import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BusinessBottomItem from './BusinessBottomItem';

const BusinessBottom = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await axios.get('/appapi/lt/category/news');
      setContent(res.data.data.news.splice(6));
    };

    fetchContent();
  }, []);

  console.log(content);

  return (
    <div className='business-items'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        overflow: 'scroll'
      }}
    >
      {content.map((item) => (
        <BusinessBottomItem key={item.n_id} item={item} />
      ))}
    </div>
  );
};

export default BusinessBottom;
