import React, {useEffect} from 'react'
import styles from '../OverviewBlock/Overview.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {data} from '../../Overview/Overview'

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Charts() {



  return (
    <>
        {data.map( (item) => (
            <div className={styles.container}>
                <h3 className={styles.title}><span className={styles.money}>Revenue Analytics</span></h3>
                <div className={styles.dilivar}></div>
                <Doughnut data={item} />
            </div>
        ))}
        
    </>
  )
}
