import React from 'react'
import Action from '../components/Action'
import Horror from '../components/Horror'
import NavigationBar from '../components/NavigationBar'
import Slider from '../components/Slider'
import Trending from '../components/Trending'

function LandingPage() {
  return (
    <div>
      <div className="">
        <NavigationBar/>
        <Slider/>
      </div>

      <div className="trending">
        <Trending/>
      </div> 

      <div className="horror">
        <Horror/>
      </div> 

      <div className="action">
        <Action/>
      </div>
      
      <div>
    </div>
    </div>
    )
}

export default LandingPage