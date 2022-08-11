import React from 'react'
import { Footer, NavbarComponent, PageTitle, TableGenreComponent } from '../../components'
import bgformdirector from '../../assets/images/bg/bgformdirector.jpg'

const GenrePages = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformdirector})` }}>
        <NavbarComponent />
        <div className="container mt-5">
            <div className="card border" style={{ height: '52vh' }}>
                {/* Page Title */}
                <PageTitle title="List Genre" />

                {/* Content */}
                <div className="card-body p-0">
                    <TableGenreComponent />
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
}

export default GenrePages