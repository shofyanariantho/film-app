import React from 'react'
import { Footer, NavbarComponent, PageTitle, TableGenreComponent } from '../../components'
import bgformgenre from '../../assets/images/bg/bgformgenre.jpg'

const GenrePages = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformgenre})` }}>
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