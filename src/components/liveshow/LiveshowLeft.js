import React from 'react';
import photo from '../../Images/Assets-LT/photo.jpg'
import photo2 from '../../Images/Assets-LT/image2.jpg'

const LiveshowLeft = () => {
  return (
    <div className="container" style={{ flex: 1,backgroundColor:"white" }} >
      <img
        src={photo}
        style={{ width: '95%', height: '300px',marginTop:"20px",borderRadius:"4px" }}
      />
      <div style={{marginTop:"40px",marginBottom:"20px"}}>
      <div>13:45</div>
      <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <h2 style={{fontSize:"18px"}}>The LallanTop Show: Episode 26</h2>
        <div className="ongoing" style={{marginRight:"35px",borderRadius:"4px",padding:"4px"}}>ONGOING</div>
      </div>
      </div>
     
      <p style={{textAlign:"justify",marginRight:"30px"}}>
      IndvsEng: लॉर्ड्स क्रिकेट मैदान पर तीसरे दिन सिक्योरिटी गार्ड्स को चकमा देकर कौन घुस आया?
      IndvsEng: लॉर्ड्स क्रिकेट मैदान पर तीसरे दिन सिक्योरिटी गार्ड्स को चकमा देकर कौन घुस आया?
       
      </p>
      <div className="badges" style={{ display: 'flex' }}>
      
        <a>#Police</a>
        <a>#Bihar</a>
        <a>#Politics</a>
      </div>
      
      <div style={{ display: 'flex' ,marginLeft:"0px", paddingBottom: '30px'}} >
      <p style={{marginRight:"30px"}}>7:18 PM</p>
      <li className="l" style={{marginRight:"30px"}}>January 22 2021</li>
      <li className="l">232</li>
      </div>
    </div>
  );
};

export default LiveshowLeft;
