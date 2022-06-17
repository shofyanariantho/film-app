import React from 'react'
import DashboardComponent from '../components/DashboardComponent'
import Footer from '../components/Footer'
import NavigationBarDashboard from '../components/NavigationBarDashboard'

function DashboardPage() {
  return (
    <div>
        <NavigationBarDashboard/>
        <DashboardComponent/>
        <Footer/>
    </div>
  )
}

export default DashboardPage