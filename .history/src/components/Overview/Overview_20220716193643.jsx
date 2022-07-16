import React from 'react'
import OverviewBlock from '../OverviewBlocks/OverviewBlock/OverviewBlock'
import styles from './Overview.module.css'
import Charts from '../OverviewBlocks/OverviewCharts/Charts'

export default function Overview() {
  return (
    <div className={styles.container}>
      <OverviewBlock/>
      <Charts/>
    </div>
  )
}
