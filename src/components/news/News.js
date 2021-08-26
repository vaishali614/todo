import NewsTop from './NewsTop';
import NewsBottom from './NewsBottom';
import './news.css';

const News = ({all,article,video,path}) => {
  
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
          <NewsTop path={path} all={all} article={article} video={video}/>
          <NewsBottom path={path} all={all} article={article} video={video}/>
        </div>
      </div>
    </div>
  );
};

export default News;