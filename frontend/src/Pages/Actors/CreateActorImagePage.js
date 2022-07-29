import React from 'react'
import { CreateImageActor, Footer, NavbarComponent, PageTitle } from '../../components'
import bgformactor from "../../assets/images/bg/bgformactor.jpg"

const CreateActorImagePage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformactor})` }}>
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