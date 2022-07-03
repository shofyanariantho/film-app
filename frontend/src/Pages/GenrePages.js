import React from 'react'
import NavigationBarDashboard from '../components/NavigationBarDashboard'
import TableGenreComponent from '../components/TableGenreComponent'
import Footer from '../components/Footer'

const GenrePages = () => {
  return (
    <div>
      <NavigationBarDashboard/>
      <TableGenreComponent/>
      <Footer/>
    </div>
  )
}

export default GenrePages