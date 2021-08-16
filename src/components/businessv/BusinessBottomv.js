import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BusinessBottomItemv from './BusinessBottomItemv';

const BusinessBottomv = () => {
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
    <div
      className="business-list"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        overflow: "scroll"
      }}
    >
      {content.map((item) => (
        <BusinessBottomItemv key={item.n_id} item={item} />
      ))}
    </div>
  );
};

export default BusinessBottomv;