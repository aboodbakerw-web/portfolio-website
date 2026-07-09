import React from 'react'
import { Home } from '../Home/Home'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'

export const MasterLayout = () => {
  return (
<section className="container-fluid p-0">
  <div className="row g-0 align-items-stretch">
    <div className="col-lg-2 sidebar-column">
      <Sidebar />
    </div>

    <div className="col-lg-10 col-12">
      <Outlet />
    </div>
  </div>
</section>
  )
}
