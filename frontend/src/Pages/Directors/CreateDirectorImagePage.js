import React from 'react'
import bgformadirector from '../../assets/images/bg/bgformdirector.jpg'
import { CreateImageDirector, Footer, NavbarComponent, PageTitle } from '../../components'

const CreateDirectorImagePage = () => {
    return (
        <div style={{ backgroundImage: `url(${bgformadirector})` }}>
            {/* NAVBAR */}
            <NavbarComponent />
            {/* NAVBAR END */}

            <div className="container mt-5" style={{ height: '52vh' }}>
                <div className="card border">
                    {/* Page Title */}
                    <PageTitle title="Upload Director Images" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <CreateImageDirector />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
            {/* FOOTER END */}
        </div>
    )
}

export default CreateDirectorImagePage