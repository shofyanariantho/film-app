import React from 'react'
import { CreateImageFilm, CreateImagefilm, Footer, NavbarComponent, PageTitle } from '../../components'
import bgformdirector from "../../assets/images/bg/bgformdirector.jpg"

const CreateImageFilmPage = () => {
    return (
        <div style={{ backgroundImage: `url(${bgformdirector})` }}>
            {/* NAVBAR */}
            <NavbarComponent />
            {/* NAVBAR END */}

            <div className="container mt-5" style={{ height: '52vh' }}>
                <div className="card border">
                    {/* Page Title */}
                    <PageTitle title="Upload film Images" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <CreateImageFilm />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
            {/* FOOTER END */}
        </div>
    )
}

export default CreateImageFilmPage