import React from 'react'
import { DashboardFilm, Footer, NavbarComponent } from '../../components'

const DashboardFilmPage = () => {
    return (
        <div>
            {/* NAVBAR START */}
            <NavbarComponent />
            {/* NAVBAR END */}

            {/* MAIN CONTENT START */}
            <DashboardFilm />
            {/* MAIN CONTENT END */}

            {/* FOOTER START */}
            <Footer />
            {/* FOOTER END */}
        </div>
    )
}

export default DashboardFilmPage