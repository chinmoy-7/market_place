import React from 'react'
import {DashboardHeader} from '../../components/Shop/Layout/DashboardHeader.jsx'
import {DashboardSideBar} from '../../components/Shop/Layout/DashboardSideBar.jsx'
export const ShopDashboardPage = () => {
  return (
    <div>
        <DashboardHeader/>
        <div className="flex items-center justify-between w-full">
            <div className="800px:w-[330px] w-[80px] ">
                <DashboardSideBar active={1}/>
            </div>
        </div>
    </div>
  )
}
