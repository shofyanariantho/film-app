import React from 'react'
import bgformgenre from '../../assets/images/bg/bgformgenre.jpg'
import { Footer, NavbarComponent, PageTitle, UpdateGenreComponent } from '../../components'

const EditGenre = () => {
    return (
        <div style={{ backgroundImage: `url(${bgformgenre})` }}>
            {/* NAVBAR */}
            <NavbarComponent />
            {/* NAVBAR END */}

            <div className="container mt-5" style={{ height: '52vh' }}>
                <div className="card border">
                    {/* Page Title */}
                    <PageTitle title="Update Genre" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <UpdateGenreComponent />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
            {/* FOOTER END */}
        </div>
    )
}

export default EditGenre