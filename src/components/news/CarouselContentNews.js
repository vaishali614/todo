import React from 'react'
import axios from 'axios'
import share from '../../Images/Assets-LT/share.png';
import tab from '../../Images/Assets-LT/tab.png';
import heart from '../../Images/Assets-LT/heart.png';


const CarouselContentNews = ({item,index}) => {
    return (
    
        <div
        className='container-fluid row'
        style={{ display: 'flex', backgroundColor: 'white' }}
      >
        <div className='col'>
        <img
          className='container-fluid mt-5 '
          src={item.v_large_image}
          style={{
            width: '100%',
            height: '250px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
          onClick={() => window.open(item.v_share_url, '_blank')}
        />
        </div>
        <div className="col">
          <div className='mt-5' style={{ display: 'flex' }}>
            <div style={{ display: 'flex' }}>
              {/*<img
                style={{ width: '20px', height: '20px', marginRight: '5px' }}
                src={share}
              />*/}
              <i className="fa fa-eye " style={{width:"20px",height:"20px",paddingTop:"2px"}} aria-hidden="true"></i>
              {item.v_view_count}
            </div>
  
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: '450px',
              }}
            >
              <div style={{ marginRight: '20px' }}>
                <img style={{ width: '30px', height: '30px' }} src={share} />
              </div>
              <div style={{ marginRight: '20px' }}>
                <img style={{ width: '20px', height: '30px' }} src={tab} />
              </div>
              <div className='takepoll'>Take Poll</div>
            </div>
          </div>
  
          <h5 className="par">{item.v_title}</h5>
          <p className="para">{item.v_short_desc}</p>
          <div className='imagesBadge' style={{ display: 'flex' }}>
            <p>#Police</p>
            <p>#Bihar</p>
            <p>#Politics</p>
          </div>
          <div style={{ justifyContent: 'space-between', display: 'block' }}>
            <div style={{ display: 'flex', marginLeft: '0px' }}>
              <p style={{ marginRight: '30px' }}>
                {index.v_updated_datetime?.substring(11) || ''}
              </p>
              <li className='l' style={{ marginRight: '30px' }}>
                {item.v_updated_datetime?.substring(0, 10) || ''}
              </li>
              <li className='l'>{item.v_duration}</li>
              <li style={{marginLeft:"20px"}}>232</li>
            </div>
            <div
              className='heart'
              style={{ marginTop: '10px' }}
            >
              <img
                style={{ width: '30px', height: '30px' }}
                src={heart}
              />
            </div>
          </div>
        </div>
      </div>
     
    )
}

export default CarouselContentNews;
