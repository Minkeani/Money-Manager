import React from 'react'
import styles from './Customization.module.css'
import classNames from 'classnames'

export default function Customization() {
  return (
    <div className={styles.range}>
    <div className={styles.sliderValue}>
      <span>100</span>
    </div>
<div className={styles.field}>
      <div className={classNames(styles.value,  styles.left)}>
0</div>
<input type="range" min="10" max="200" value="100" steps="1"/>
      <div className={classNames(styles.value,  styles.right)}>
200</div>
</div>
</div>
  )
}
