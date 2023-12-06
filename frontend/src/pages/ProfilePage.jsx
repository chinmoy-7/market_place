import React, { useState } from 'react'
import { Header } from '../components/Layout/Header'
import styles from '../styles/style'
import {ProfileSidebar} from '../components/Profile/ProfileSidebar.jsx'
import {ProfileContent} from '../components/Profile/ProfileContent.jsx'
export const ProfilePage = () => {
    const [active,setActive] = useState(1);
  return (
    <div>
        <Header/>
        <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
            <div className='800px:w-[335px] w-[50px] 800px:mt-0 mt-[35%]'>
                <ProfileSidebar active={active} setActive={setActive}/>
            </div>
            <ProfileContent active={active}/>
        </div>
    </div>
  )
}
