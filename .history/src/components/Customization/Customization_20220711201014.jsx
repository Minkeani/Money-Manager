import React from 'react'
import styles from './Customization.module.css'
// import classNames from 'classnames'
import Range from '../Ui/Range'

export default function Customization() {
  return (
    <div className={styles.list}>
        <Range/>
        <Range/>
        <Range/>
    </div>
  )
}
