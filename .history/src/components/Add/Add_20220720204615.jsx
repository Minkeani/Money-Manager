import React, {useState} from 'react'
import styles from './Add.module.css'

export default function Add() {
  const [sum, setSum] = useState('')
  const [category, setCategory] = useState('')

  // function handleOnChange(e) {
  //   setSum(e.target.value)
  // }

  console.log(sum);

  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Sum:</h3>
        <input 
          className={styles.input} 
          type="text" 
          placeholder='Sum'
          onChange={ setSum(e.target.value)}
        />
        <h3 className={styles.title}>Category:</h3>
        <input className={styles.input} type="text" placeholder='Category'/>
        <button className={styles.btn}>Add</button>
    </div>
  )
}
