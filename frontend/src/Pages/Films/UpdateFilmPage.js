import React from 'react'
import bgformdirector from '../../assets/images/bg/bgformdirector.jpg'
import { Footer, NavbarComponent, PageTitle, UpdateFilms } from '../../components'

const UpdateFilmPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformdirector})` }}>
            {/* NAVBAR */}
            <NavbarComponent />
            {/* NAVBAR END */}

            <div className="container align-items-center justify-content-center my-3">
                <div className="card border ">
                    {/* Page Title */}
                    <PageTitle title="Update Films" />

                    {/* Content */}
                    <div className="card-body p-3">
                        <UpdateFilms />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
            {/* FOOTER END */}
        </div>
  )
}

export default UpdateFilmPage