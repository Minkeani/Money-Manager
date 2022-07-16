import React, {useState} from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import Budget from '../../icons/budget.svg'
import overview from '../../icons/Overview.svg'
import settings from '../../icons/settings.svg'
import { motion } from "framer-motion";


export default function Header() {
  const [active, setActive] = useState(1)

  const HeaderAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.3}
    })
  };
  

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={HeaderAnimation}
      className={styles.container}> 
    <ul className={styles.list__container}>
        <li 
          onClick={() => setActive(1)}
          className={active === 1 ? styles.active : ''}
        >
            <Link to='/Overview' exact='true' >
                 <img src={overview} alt="" />
                Overview</Link>
        </li>
        <li 
          onClick={() => setActive(2)}
          className={active === 2 ? styles.active : ''}
          >
            <Link to='/Budget' exact='true' >
               <img src={Budget} alt="" />
              Budget</Link></li>
        <li
           onClick={() => setActive(3)}
           className={active === 3 ? styles.active : ''}
          >
            <Link to="/Settings" exact='true'>
              <img src={settings} alt="" />
              Settings</Link></li>
    </ul>
        
    </motion.div>
  )
}
