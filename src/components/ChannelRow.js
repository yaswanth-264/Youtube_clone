import React from 'react'
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlined';
import Avatar from '@mui/material/Avatar';
import "./ChannelRow.css";
function ChannelRow({image,channel,verified,subs,noOfVideos,description}){
  return (
    <div className="channelRow">
            <Avatar sx={{ height: '70px', width: '70px' }} className="avatar" src={image} alt="channelImage" />
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p>{subs} subscribers . {noOfVideos}</p>
                <p>{description}</p>
            </div>
    </div>
  )
}

export default ChannelRow