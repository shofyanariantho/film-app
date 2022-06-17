import React from 'react'
import Footer from '../components/Footer'
import FormComponentUpload from '../components/FormComponentUpload'
import NavigationBarDashboard from '../components/NavigationBarDashboard'

function UploadPage() {
  return (
    <div>
        <NavigationBarDashboard/>
        <FormComponentUpload/>
        <Footer/>
    </div>
  )
}

export default UploadPage