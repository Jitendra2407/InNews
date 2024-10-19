import React from 'react'
import styles from './PaperHeading.module.css'

const PaperHeading = () => {
  return (
    <div className={`${styles.Container} mt-2`}>
      <h1 className='text-white'>Times of India</h1>
    </div>
  )
}

export default PaperHeading