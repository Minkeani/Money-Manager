import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}> 
    <img className={styles.logo} src={iconTheme} alt="icon" />
    <ul className={styles.list__container}>
        <li><Link to='/' exact='true' >Home</Link></li>
        <li><Link to='/people/?page=1' exact='true' >People</Link></li>
        <li><Link to='/search' exact='true' >Search</Link></li>
        <li><Link to="/not-found" exact='true'>Not Found</Link></li>
        <li><Link to="/fail" exact='true'>Fail</Link></li>
    </ul>
       <Favourite/>
        
    </div>
  )
}
