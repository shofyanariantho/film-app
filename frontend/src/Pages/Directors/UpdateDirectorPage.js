import React from 'react'
import bgformdirector from '../../assets/images/bg/bgformdirector.jpg'
import { Footer, NavbarComponent, PageTitle, UpdateDirector } from '../../components'

const UpdateDirectorPage = () => {
    return (
        <div style={{ backgroundImage: `url(${bgformdirector})` }}>
            {/* NAVBAR */}
            <NavbarComponent />
            {/* NAVBAR END */}

            <div className="container mt-5" style={{ height: '52vh' }}>
                <div className="card border">
                    {/* Page Title */}
                    <PageTitle title="Update Director Name" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <UpdateDirector />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
            {/* FOOTER END */}
        </div>
    )
}

export default UpdateDirectorPage;