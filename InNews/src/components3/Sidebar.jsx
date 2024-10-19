import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <>
      <div className={`bg-custom-dark-blue ${styles.sidebarContainer}`}>
        <ul className={`flex flex-col ${styles.list} space-y-8`}>
          <li>Top Stories</li>
          <li>Politics</li>
          <li>Business</li>
          <li>Technology</li>
          <li>Education</li>
          <li>Sports</li>
          <li>Entertainment</li>
          <li>Crime</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;
