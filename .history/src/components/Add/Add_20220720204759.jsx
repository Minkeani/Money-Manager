import React, {useState} from 'react'
import styles from './Add.module.css'

export default function Add() {
  const [sum, setSum] = useState('')
  const [category, setCategory] = useState('')

  function handleOnChangeSum(e) {
    setSum(e.target.value)
  }

  function handleOnChangeCategory(e) {
    setCategory(e.target.value)
  }

  console.log(sum, category);

  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Sum:</h3>
        <input 
          className={styles.input} 
          type="text" 
          placeholder='Sum'
          onChange={handleOnChangeSum}
        />
        <h3 className={styles.title}>Category:</h3>
        <input 
          className={styles.input} 
          type="text" 
          placeholder='Category'
          onChange={handleOnChangeCategory}
          />
        <button className={styles.btn}>Add</button>
    </div>
  )
}
