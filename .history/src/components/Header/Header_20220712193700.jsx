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
            <img src={overview} alt="" />
            <a to='/Overview' exact='true' >Overview</a>
        </li>
        <li><a to='/Budget' exact='true' >Budget</a></li>
        <li><a ato="/Settings" exact='true'>Settings</a></li>
    </ul>
        
    </div>
  )
}
