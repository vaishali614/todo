
import './story.css';
import { useHistory } from "react-router-dom";
import Storystyle from './storystyle';

const Story = ({ image, title, link,largeimage },props) => {

  let history = useHistory();
  console.log(largeimage);
  
  const newC=()=>{
    history.push("/story")
     return(
      <Storystyle  image={image} title={title} largeimage={largeimage}/>
     )
  }


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
          onClick={newC}
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