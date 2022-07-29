import React from 'react'
import { CreateFilm, Footer, NavbarComponent, PageTitle } from '../../components'
import bgformfilms from "../../assets/images/bg/bgformfilm.jpg"

const CreateFilmPage = () => {
    return (
        <div style={{ backgroundImage: `url(${bgformfilms})` }}>
            <NavbarComponent />
            <div className="container mt-5">
                <div className="card border">
                    {/* Page Title */}
                    <PageTitle title="Upload Actor" />

                    {/* Content */}
                    <div className="card-body p-3">
                        <CreateFilm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CreateFilmPage