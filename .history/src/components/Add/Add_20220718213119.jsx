import React from 'react'
import styles from './Add.module.css'

export default function Add() {
  return (
    <div>
        <h3>Sum:</h3>
        <input type="text" placeholder='Sum'/>
        <h3>Category:</h3>
        <input type="text" placeholder='Category'/>
        <button>Add</button>
    </div>
  )
}
