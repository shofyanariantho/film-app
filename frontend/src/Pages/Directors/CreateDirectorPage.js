import React from 'react'
import bgformdirector from '../../assets/images/bg/bgformdirector.jpg'
import { CreateDirector, Footer, NavbarComponent, PageTitle } from '../../components';


const CreateDirectorPage = () => {
    return (
        <div style={{backgroundImage:`url(${bgformdirector})`}}>
            <NavbarComponent />
            <div className="container mt-5" style={{ height: '56.9vh' } }>
                <div className="card border" >
                    {/* Page Title */}
                    <PageTitle title="Upload Director" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <CreateDirector />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default CreateDirectorPage