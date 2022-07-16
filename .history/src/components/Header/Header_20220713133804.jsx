import React, {useState} from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import Budget from '../../icons/budget.svg'
import overview from '../../icons/Overview.svg'
import settings from '../../icons/settings.svg'


export default function Header() {
  const [active, setActive] = useState(1)

  return (
    <div className={styles.container}> 
    <ul className={styles.list__container}>
        <li 
          data='1' 
          onClick={() => setActive(data)}
        >
            <Link to='/Overview' exact='true' >
                 <img src={overview} alt="" />
                Overview</Link>
        </li>
        <li 
          data='2'
          onClick={() => setActive(data)}
          >
            <Link to='/Budget' exact='true' >
               <img src={Budget} alt="" />
              Budget</Link></li>
        <li
           data='3'
           onClick={() => setActive(data)}>
            <Link to="/Settings" exact='true'>
              <img src={settings} alt="" />
              Settings</Link></li>
    </ul>
        
    </div>
  )
}
