import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Item.css"
function Item({title,channel,views,timestamp,image1,image}){
  return (
    <div className="item">
       <img className="video__thumbnail"src={image1} alt="yash" />
      <div className="video__info">
<AccountCircleIcon className="avatar1"/>
       <div className="channel__info">
       <h4>{title}</h4>
       <p>{channel}</p>
       <p>{views} . {timestamp}</p>
       </div>
       </div>
    </div>
  )
}

export default Item

