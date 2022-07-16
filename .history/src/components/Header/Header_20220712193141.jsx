import React from 'react'
import styles from './Header.module.css'
import Link from 'react-router-dom'


export default function Header() {
  return (
    <div className={styles.container}> 
    <ul className={styles.list__container}>
        <li><Link to='/Overview' exact='true' >Overview</Link></li>
        <li><Link to='/Budget' exact='true' >Budget</Link></li>
        <li><Link ato="/Settings" exact='true'>Settings</Link></li>
    </ul>
        
    </div>
  )
}
