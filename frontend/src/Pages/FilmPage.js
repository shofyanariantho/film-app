import React from 'react'
import FilmPoster from '../components/FilmPoster'
import Footer from '../components/Footer'
import NavFilm from '../components/NavFilm'
import NavigationBar from '../components/NavigationBar'

function FilmPage() {
  return (
    <div>
        <NavigationBar/>
        <NavFilm/>
        <FilmPoster/>
        <Footer/>
    </div>
  )
}

export default FilmPage