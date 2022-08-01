import React from 'react'
import { DirectorList, Footer, NavbarComponent, PageTitle } from '../../components'
import bgformdirector from "../../assets/images/bg/bgformdirector.jpg"

const ListDirectorPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformdirector})` }}>
            {/* NAVBAR */}
            <NavbarComponent />
            {/* NAVBAR END */}

            <div className="container mt-5">
                <div className="card border" style={{ height: '100vh' }}>
                    {/* Page Title */}
                    <PageTitle title="List Director" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <DirectorList />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
            {/* FOOTER END */}
        </div>
  )
}

export default ListDirectorPage