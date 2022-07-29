import React from 'react'
import DashboardComponent from '../components/DashboardComponent'
import NavigationBarDashboard from '../components/NavigationBarDashboard'

function DashboardPage() {
  return (
    <div>
        <NavigationBarDashboard/>
        <DashboardComponent/>
    </div>
  )
}

export default DashboardPage