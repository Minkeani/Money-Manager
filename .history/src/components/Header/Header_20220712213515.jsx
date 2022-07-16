import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import Budget from '../../icons/budget.svg'
import overview from '../../icons/Overview.svg'
import settings from '../../icons/settings.svg'


export default function Header() {
  return (
    <div className={styles.container}> 
    <ul className={styles.list__container}>
        <li>
           
            <Link to='/Overview' exact='true' >
                 <img src={overview} alt="" />
                Overview</Link>
        </li>
        <li>
            <img src={Budget} alt="" />
            <Link to='/Budget' exact='true' >Budget</Link></li>
        <li>
            <img src={settings} alt="" />
            <Link to="/Settings" exact='true'>Settings</Link></li>
    </ul>
        
    </div>
  )
}
