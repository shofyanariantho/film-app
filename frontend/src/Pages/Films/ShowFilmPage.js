import React from 'react'
import { Footer, NavbarComponent } from '../../components'
import ShowFilm from '../../components/Films/ShowFilm'
import bgfilm from '../../assets/images/bg/bgfilm.jpg'

const ShowFilmPage = () => {
    return (
        <div style={{backgroundImage : `url(${bgfilm})`}}>
            {/* NAVBAR START */}
            <NavbarComponent />
            {/* NAVBAR END */}


            {/* MAIN CONTENT START */}
            <div className="container mt-5">
                <div className="card border">
                    <ShowFilm />
                </div>
            </div>
            {/* MAIN CONTENT END */}

            {/* FOOTER START */}
            <Footer />
            {/* FOOTER END */}
        </div>
    )
}

export default ShowFilmPage