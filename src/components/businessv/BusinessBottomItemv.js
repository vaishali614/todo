import React from 'react';
import tab from '../../Images/Assets-LT/tab.png';
import share from '../../Images/Assets-LT/share.png';

const BusinessBottomItemv = ({ item }) => {
  return (
    <div className='container-fluid ' style={{ flex: 1, marginTop: '80px' }}>
      <img
        className='container '
        src={item?.n_large_image}
        style={{ width: '100%', height: '300px', cursor: 'pointer' }}
        onClick={() => window.open(item?.n_share_link, '_blank')}
      />
      <div
        className='container mt-3'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex' }}>
        <i className="fa fa-eye " style={{width:"20px",height:"20px",paddingTop:"2px"}} aria-hidden="true"></i>
          {232}
        </div>
        <div>
          <img
            src={share}
            style={{ width: '20px', height: '20px', marginRight: '10px' }}
          />
          <img src={tab} style={{ width: '20px', height: '20px' }} />
        </div>
      </div>
      <div
        className='container mt-2'
        style={{ fontSize: '15px', fontWeight: '500' }}
      >
        {item?.n_title}
      </div>
      <p className='container mt-2' style={{ fontSize: '13px' }}>
        {item?.n_short_desc}
      </p>
      <div className='imagesBadge container' style={{ display: 'flex' }}>
        <p>#Police</p>
        <p>#Bihar</p>
        <p>#Politics</p>
      </div>
      <div className='container' style={{ display: 'flex', marginLeft: '0px' }}>
        <p style={{ marginRight: '30px' }}>
          {item?.n_updated_datetime?.substring(11)}
        </p>
        <li className='l' style={{ marginRight: '30px' }}>
          {item?.n_updated_datetime?.substring(0, 10)}
        </li>
        <li className='l'>232</li>
      </div>
    </div>
  );
};

export default BusinessBottomItemv;