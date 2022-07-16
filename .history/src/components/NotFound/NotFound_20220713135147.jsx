import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {

    let location = useLocation()

  return (
    <div>
      <p className={styles.error}>404</p>
      <p className={styles.text}>No matches were found with <u>{location.pathname}</u></p>
    </div>
  )
}