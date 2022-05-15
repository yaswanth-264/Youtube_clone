import React from 'react'
import "./SearchPage.css";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";
import "./ChannelRow.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
const SearchPage = () => {
  return (
    <div className="searchPage">
    <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
        </div>
        <hr />
        <ChannelRow 
            image="https://yt3.ggpht.com/-8U5K03SAEEE/AAAAAAAAAAI/AAAAAAAAAAA/dXz0pBDP2s4/s240-c-k-no-mo-rj-c0xffffff/p"
            channel="Dhruv Rathee"
            verified
            subs="7.3M"
            noOfVideos={453}
            description="I love breaking down complex issues in simple words"
        />
        <hr />
        <h2>Latest from Dhruv Rathee</h2>
        <VideoRow 
            views="1.9M"
            subs="7.38M"
            description="There was a time in history when tensions between the USA and the Soviet Union intensified, and they came very close to a Nuclear War, which might have turned into World War 3."
            timestamp="1 day ago"channel="Dhruv Rathee"
            title="Cuba missile crisis!How US and soviet union almost started WW3"
            image="https://i.ytimg.com/vi/_6M4rX-PYzs/mqdefault.jpg"
        />
          <VideoRow 
            views="2.5M"
            subs="7.38M"
            description="It's been 2 months of the Russia Ukraine war, and there's no hope of peace yet. But Russia has done something unexpected by turning its forces back from northern Ukraine."
            timestamp="4 days ago"channel="Dhruv Rathee"
            title="Russia turns Back!Latest update from Ukraine"
            image="https://i.ytimg.com/vi/_xVi4j5A-go/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBFeG1PnjtxGhEAnPkUMRq4HewUmA"
        />
          <VideoRow 
            views="3M"
            subs="7.38M"
            description="China is facing a huge uprise in the number of covid cases which is being driven by the variant Stealth Omicron. To prevent the spread, president Xi Jinping has again resorted to the Zero Covid Policy. "
            timestamp="8 days ago"channel="Dhruv Rathee"
            title="World's Harshest Lockdown in China | Zero COVID Policy"
            image="https://i.ytimg.com/vi/j9VOQZX5btA/maxresdefault.jpg"
        />
          <VideoRow 
            views="1.6M"
            subs="7.38M"
            description="A new way of Justice is being imposed in the states of Uttar Pradesh, Madhya Pradesh, and Rajasthan upon some people, whose houses, which are illegal structures according to the government, are being demolished by Bulldozers."
            timestamp="13 days ago"channel="Dhruv Rathee"
            title="The Problem with Bulldozer Justice in India | Dhruv Rathee"
            image="https://i.ytimg.com/vi/HzH71M5plAs/maxresdefault.jpg"
        />
          <VideoRow 
            views="3.2M"
            subs="7.38M"
            description="Delhi, Rajasthan, Madhya Pradesh, Andhra Pradesh, Gujarat, Uttarakhand, Karanataka, and many more states are today facing rising Hindu Muslim tensions. In fact, Entire India has been facing an upsurge in divisiveness. The question is where are we heading?"
            timestamp="2 weeks ago"channel="Dhruv Rathee"
            title="The Real Reasons behind Communal Riots | Dhruv Rathee"
            image="https://i.ytimg.com/vi/LwMutPnXnoA/maxresdefault.jpg"
        />
          <VideoRow 
            views="5M"
            subs="7.38M"
            description="Sri Lankan President Gotabaya Rajapaksa declared a state of emergency in the country, as thousands of countrymen wanted his resignation because of the huge economic crisis Sri Lanka is facing. "
            timestamp="1 month ago"channel="Dhruv Rathee"
            title="Emergency in Sri Lanka! | Economic Crisis Explained"
            image="https://i.ytimg.com/vi/LLw-T_d-wWo/maxresdefault.jpg"
        />
          <VideoRow 
            views="4.4M"
            subs="7.38M"
            description="Time travel is a concept humans have been fascinating for years. But is it just a concept or a reality? And what exactly is time travel? What are the types of it? What different theories are given regarding it? Is it even logical? "
            timestamp="2 months ago"channel="Dhruv Rathee"
            title="Time Traveler from Year 2256 | Science behind the Mystery"
            image="https://i.ytimg.com/vi/IYkpHNTF0dU/maxresdefault.jpg"
        />
          <VideoRow 
            views="3.6M"
            subs="7.38M"
            description="Pakistani Prime Minister Imran Khan has been removed from his position through a non-confidence motion. He became the first Prime Minister to be ousted through a no-confidence motion, however continuing the trend of noncompletion of the 5 years Tenure."
            timestamp="3 months ago"channel="Dhruv Rathee"
            title="Why Imran Khan Lost? | Political crisis in Pakistan"
            image="https://i.ytimg.com/vi/nxvw_O3IBow/maxresdefault.jpg"
        />
          <VideoRow 
            views="2.9M"
            subs="7.38M"
            description="nicely explained the main points..and the section regarding TCAS is very much appreciated..also with this video at least the people will know who are the Air traffic controllers and how they work.. "
            timestamp="6 months ago"channel="Dhruv Rathee"
            title="India's Worst Plane Crash | Dhruv Rathee"
            image="https://i.ytimg.com/vi/klnYxLLcceE/maxresdefault.jpg"
        />
    </div>
  )
}

export default SearchPage