import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😢</span>
        <br />
        <h1>Ничего не найдено</h1>
      </h1>
      <p>К сожалению данные страницы отсутствуют в нашем интернет-магазине</p>  
    </div>
    
  )
}

export default NotFound
