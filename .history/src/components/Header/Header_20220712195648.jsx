import React from 'react'
import styles from './Header.module.css'
import Link from 'react-router-dom'
import Budget from '../../icons/budget.svg'
import overview from '../../icons/Overview.svg'
import settings from '../../icons/settings.svg'


export default function Header() {
  return (
    <div className={styles.container}> 
    <ul className={styles.list__container}>
        <li>
           
            <a to='/Overview' exact='true' >
                 <img src={overview} alt="" />
                Overview</a>
        </li>
        <li>
            <img src={Budget} alt="" />
            <a to='/Budget' exact='true' >Budget</a></li>
        <li>
            <img src={settings} alt="" />
            <a ato="/Settings" exact='true'>Settings</a></li>
    </ul>
        
    </div>
  )
}
