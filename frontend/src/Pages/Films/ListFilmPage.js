import React from 'react'
import { Footer, ListFilm, NavbarComponent, PageTitle } from '../../components'
import bgformfilm from '../../assets/images/bg/bgformfilm.jpg'

const ListFilmPage = () => {
    return (
            <div style={{ backgroundImage: `url(${bgformfilm})` }}>
                <NavbarComponent />
                <div className="container mt-5">
                    <div className="card border" style={{ height: '100vh' }}>
                        {/* Page Title */}
                        <PageTitle title="List Film" />

                        {/* Content */}
                        <div className="card-body p-0">
                            <ListFilm />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default ListFilmPage