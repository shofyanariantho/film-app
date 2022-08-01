import React from 'react'
import bgformactor from '../../assets/images/bg/bgformactor.jpg'
import { CreateActor, Footer, NavbarComponent, PageTitle } from '../../components';

const CreateActorPages = () => {
    return (
        <div style={{backgroundImage:`url(${bgformactor})`}}>
            <NavbarComponent />
            <div className="container mt-5" style={{ height: '52vh' }}>
                <div className="card border">
                    {/* Page Title */}
                    <PageTitle title="Upload Actor" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <CreateActor />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default CreateActorPages