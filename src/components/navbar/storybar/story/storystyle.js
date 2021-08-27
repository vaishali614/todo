import React from 'react'
import Stories from 'react-insta-stories';

const storystyle = ({ image, title, link,largeimage }) => {

    console.log(image)
    const stories = [
        'https://akm-img-a-in.tosshub.com/sites/lallantop/wp-content/uploads/2021/08/ccsingh_270821-093325-1024x576.jpg?size=800',
        'https://akm-img-a-in.tosshub.com/sites/lallantop/wp-content/uploads/2021/08/akshay-mumbai-police_270821-103817-1024x576.png?size=800',
        'https://akm-img-a-in.tosshub.com/sites/lallantop/wp-content/uploads/2021/08/salman-khan-airport_270821-093415-1024x576.jpg?size=800'
    ];
    return (
        <div style={{backgroundColor:"#000000"}}>
            <Stories 
                stories={stories}
                defaultInterval={1500}
                width={500}
                height={650}
                storyContainerStyles={{marginLeft:"480px"}}
            />
        </div>
       
    )
}

export default storystyle
