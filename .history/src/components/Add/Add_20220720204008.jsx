import React, {useState} from 'react'
import styles from './Add.module.css'

export default function Add() {



  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Sum:</h3>
        <input className={styles.input} type="text" placeholder='Sum'/>
        <h3 className={styles.title}>Category:</h3>
        <input className={styles.input} type="text" placeholder='Category'/>
        <button className={styles.btn}>Add</button>
    </div>
  )
}
