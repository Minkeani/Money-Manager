import React, {useEffect, memo} from 'react'
import styles from '../OverviewBlock/Overview.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Charts({data}) {


  return (
    <>
        {data.map( (item) => (
            <div className={styles.container}>
                <h3 className={styles.title}><span className={item.classes === 'money' ? styles.money : styles.Remoney}>{item.Analitic} Analitics</span></h3>
                <div className={styles.dilivar}></div>
                <Doughnut data={item} />
            </div>
        ))}
        
    </>
  )
}
