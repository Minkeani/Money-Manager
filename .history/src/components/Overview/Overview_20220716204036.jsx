import React from 'react'
import OverviewBlock from '../OverviewBlocks/OverviewBlock/OverviewBlock'
import styles from './Overview.module.css'
import Charts from '../OverviewBlocks/OverviewCharts/Charts'

// const [blocks, setBlocks] = useState([
//   {type: 'Incomes', sign: '+', classes: 'money', array:  [{money: 1000, category: 'life'}, {money: 1000, category: 'life'}, {money: 1000, category: 'life'}]},
//   {type: 'Expenses', sign: '-', classes: 'Remoney', array:  [{money: 1000, category: 'life'}, {money: 1000, category: 'life'}, {money: 1000, category: 'life'}]}
// ])

// export const data = [
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// ]

export default function Overview() {
  return (
    <div className={styles.container}>
      <OverviewBlock/>
      <Charts/>
    </div>
  )
}
