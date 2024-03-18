import React from 'react'


const videoItem = (props) => {
console.log(props);

let {title , thumbnailUrl,videoUrl, author,uploadTime,views ,description,subscriber} = props.data.video;
let {setVid} = props.data;
let{ setTitle} = props.data


let changeVideo = () =>{
   setVid(videoUrl) 
   setTitle(title)
}
  return (



    
    <div className="videoItem">
      
    <img src={thumbnailUrl } alt={title} className='rightimg' onClick={changeVideo} />
    <h1 className='author'> Author:{author} </h1>
    <h3 className='uploadTime'> uploadTime:{uploadTime} </h3>
    <h4 className='views'> views:{views} </h4>
    <h5 className='description'> description:{description} </h5>
    <h5 className='subscriber'> subscriber:{subscriber} </h5>

      
    </div>
  )
}

export default videoItem