import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SideBarRow from './SideBarRow';

const SideBar = () => {
  return (
    <div className="sidebar">
     <SideBarRow selected Icon={HomeIcon} title="Home"/>
     <SideBarRow Icon={ExploreIcon} title="Trending"/> 
     <SideBarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
     {/* I in Icon should be capital as we are passing component as prop */}
     <hr />
     <SideBarRow  Icon={VideoLibraryIcon} title="Library"/>
     <SideBarRow  Icon={HistoryIcon} title="History"/>
     <SideBarRow  Icon={OndemandVideoIcon} title="Your videos"/>
     <SideBarRow Icon={WatchLaterIcon} title="Watch Later"/>  
     <SideBarRow  Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
     <SideBarRow  Icon={ExpandMoreOutlinedIcon} title="Show More"/>
    </div>
  )
}

export default SideBar;