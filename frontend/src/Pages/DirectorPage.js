import React from 'react'
import DirectorComponent from '../components/DirectorComponent'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

function DirectorPage() {
  return (
    <div>
        <NavigationBar/>
        <DirectorComponent/>
        <Footer/>
    </div>
  )
}

export default DirectorPage