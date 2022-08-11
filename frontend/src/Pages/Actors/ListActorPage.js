import React from 'react'
import { ActorList, Footer, NavbarComponent, PageTitle } from '../../components'
import bgformdirector from "../../assets/images/bg/bgformdirector.jpg"

const ListActorPage = () => {
    return (
        <div style={{ backgroundImage: `url(${bgformdirector})` }}>
            {/* NAVBAR */}
            <NavbarComponent />
            {/* NAVBAR END */}

            <div className="container mt-5">
                <div className="card border" style={{ height: '100vh' }}>
                    {/* Page Title */}
                    <PageTitle title="List Actor" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <ActorList />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
            {/* FOOTER END */}
        </div>)
}

export default ListActorPage