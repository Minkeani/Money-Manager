import React from 'react'
import OverviewBlock from '../OverviewBlocks/OverviewBlock/OverviewBlock'
import styles from './Overview.module.css'

export default function Overview() {
  return (
    <div className={styles.container}>
      <OverviewBlock/>
    </div>
  )
}
