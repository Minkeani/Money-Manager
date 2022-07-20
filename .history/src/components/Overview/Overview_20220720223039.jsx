import React, {useState} from 'react'
import OverviewBlock from '../OverviewBlocks/OverviewBlock/OverviewBlock'
import styles from './Overview.module.css'
import Charts from '../OverviewBlocks/OverviewCharts/Charts'

export default function Overview() {

const [data, setData] = useState([ {
  labels: ['Life', 'Food', 'Oil'],
  type: 'Incomes',
  Analitic: 'Income',
  sign: '+',
  classes: 'money',
  datasets: [
    {
      label: '# of Votes',
      data: [1000, 2500, 1700],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
},
{
  labels: ['Life', 'Food', 'Oil'],
  type: 'Expenses',
  Analitic: 'Сost',
  sign: '-',
  classes: 'Remoney',
  datasets: [
    {
      label: '# of Votes',
      data: [1000, 2500, 1700],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}
])

console.log(data);
  return (
    <div className={styles.container}>
      <OverviewBlock data={data}/>
      <Charts data={data}/>
    </div>
  )
}
