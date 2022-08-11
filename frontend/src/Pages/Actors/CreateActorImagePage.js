import React from 'react'
import { CreateImageActor, Footer, NavbarComponent, PageTitle } from '../../components'
import bgformadirector from '../../assets/images/bg/bgformdirector.jpg'

const CreateActorImagePage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformadirector})` }}>
      {/* NAVBAR */}
      <NavbarComponent />
      {/* NAVBAR END */}

      <div className="container mt-5" style={{ height: '52vh' } }>
        <div className="card border">
          {/* Page Title */}
          <PageTitle title="Upload Actor Images" />

          {/* Content */}
          <div className="card-body p-0">
            <CreateImageActor />
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* FOOTER END */}
    </div>
  )
}

export default CreateActorImagePage