import React from 'react'
import styles from './Header.module.css'
import Link from 'react-router-dom'

export default function Header() {
  return (
    <div className={styles.container}> 
    <ul className={styles.list__container}>
        <li><a to='/' exact='true' >Home</a></li>
        <li><a to='/people/?page=1' exact='true' >People</a></li>
        <li><a to='/search' exact='true' >Search</a></li>
        <li><a to="/not-found" exact='true'>Not Found</a></li>
        <li><a to="/fail" exact='true'>Fail</a></li>
    </ul>
        
    </div>
  )
}
