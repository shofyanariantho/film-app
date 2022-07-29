import React from 'react'
import bgformactor from '../../assets/images/bg/bgformactor.jpg'
import { Footer, NavbarComponent, PageTitle, UpdateActor } from '../../components'

const UpdateActorPage = () => {
    return (
        <div style={{ backgroundImage: `url(${bgformactor})` }}>
            {/* NAVBAR */}
            <NavbarComponent />
            {/* NAVBAR END */}

            <div className="container mt-5" style={{ height: '52vh' }}>
                <div className="card border">
                    {/* Page Title */}
                    <PageTitle title="Update Actor Name" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <UpdateActor />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
            {/* FOOTER END */}
        </div>
    )
}

export default UpdateActorPage