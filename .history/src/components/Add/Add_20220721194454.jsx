import React, {useState, useEffect} from 'react'
import styles from './Add.module.css'

export default function Add({setActive, data, typeData}) {
  const [sum, setSum] = useState('')
  const [category, setCategory] = useState('')

  const [sumData, setSumData] = useState('')
  const [cateData, setCateData] = useState('')



  function handleOnChangeSum(e) {
    setSum(e.target.value)
  }

  function handleOnChangeCategory(e) {
    setCategory(e.target.value)
  }

  function AddData() {
    setSumData(sum)
    setCateData(category)
    setActive(false)
    setSum('')
    setCategory('')

     if(sumData.length !== 0 && cateData.length !== 0 && typeData === 'Incomes') {
      data[0].labels.push(cateData)
      data[0].datasets[0].data.push(sumData)
    } else if(sumData.length !== 0 && cateData.length !== 0 && typeData === 'Expenses') {
      data[1].labels.push(cateData)
      data[1].datasets[0].data.push(sumData)
    }
  }


  

  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Sum:</h3>
        <input 
          className={styles.input} 
          type="text" 
          placeholder='Sum'
          value={sum}
          onChange={handleOnChangeSum}
        />
        <h3 className={styles.title}>Category:</h3>
        <input 
          className={styles.input} 
          type="text" 
          placeholder='Category'
          value={category}
          onChange={handleOnChangeCategory}
          />
        <button 
          onClick={AddData}
          className={styles.btn}>Add</button>
    </div>
  )
}
