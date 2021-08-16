import NewsTop from './NewsTop';
import NewsBottom from './NewsBottom';
import './news.css';

const News = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        marginLeft: '15px',
        marginRight: '15px',
      }}
    >
      <div className='liveheader bullet'>News</div>
      <div className=' border' style={{ border: '1px solid red' }}>
        <div className='container-fluid news '>
          <NewsTop />
          <NewsBottom />
        </div>
      </div>
    </div>
  );
};

export default News;