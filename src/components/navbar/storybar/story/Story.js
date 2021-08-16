import { Redirect } from 'react-router-dom';
import './story.css';

const Story = ({ image, title, link }) => {
  return (
    <div>
      <div className='outerimg' style={{ marginBottom: '30px' }}>
        <img
          src={image}
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            marginRight: '25px',
            border: '2px solid pink',
            marginLeft: '4px',
            marginTop: '5px',
            marginRight: '3px',
          }}
          onClick={() => window.open(link, '_blank')}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
          }}
        >
          {title.substring(0, 8)}
        </div>
      </div>
    </div>
  );
};

export default Story;