import React from 'react'
import styles from '../OverviewBlock/Overview.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Charts() {
  return (
    <div className={styles.container}>
      
    </div>
  )
}
