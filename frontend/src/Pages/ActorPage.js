import React from 'react'
import ActorComponent from '../components/ActorsComponent'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

function ActorPage() {
  return (
    <div>
        <NavigationBar/>
        <ActorComponent/>
        <Footer/>
    </div>
  )
}

export default ActorPage