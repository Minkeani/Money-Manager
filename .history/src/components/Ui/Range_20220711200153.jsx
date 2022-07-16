import React from 'react'
import classNames from 'classnames'
import styles from './Range.module.css'

export default function Range() {
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
