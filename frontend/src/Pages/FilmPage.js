import React from 'react'
import FilmPoster from '../components/FilmPoster'
import NavFilm from '../components/NavFilm'
import NavigationBar from '../components/NavigationBar'

function FilmPage() {
  return (
    <div>
        <NavigationBar/>
        <NavFilm/>
        <FilmPoster/>
    </div>
  )
}

export default FilmPage