import React from 'react'
import { Outlet } from 'react-router'

const adminlayout = () => {
  return (
    <div className='admin-layout'>
      mobile-sidebar
      <aside className='w-full max-w-\[270px\] hidden lg:block'>sidebar</aside>
      <aside className='children'>
        <Outlet/>
        </aside>
    </div>
  )
}

export default adminlayout
