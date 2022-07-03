import React from 'react'
import NavigationBarDashboard from '../components/NavigationBarDashboard'
import Footer from '../components/Footer'
import AddGenreComponent from '../components/AddGenreComponent'

const AddGenre = () => {
  return (
    <div>
        <NavigationBarDashboard/>
        <AddGenreComponent/>
        <Footer/>
    </div>
  )
}

export default AddGenre