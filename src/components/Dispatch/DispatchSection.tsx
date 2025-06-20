import React from 'react'
import styles from './DispatchSection.module.scss'
import { Button } from '../ui'

const DispatchSection = () => {
  return (
    <section className={styles.dispatchSection}>
        <h2 className={styles.title}>The M3 Dispatch</h2>
        <p className={styles.description}>
        Get curated insights, event updates, and behind-the-scenes access to the people and ideas driving Africa’s payment ecosystem, delivered straight to your inbox.            </p>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder='email@email.com'/>
        <Button theme='secondary' className={styles.btn}>
        SEND DELIVERY
        </Button>
        
      </div>
    </section>
  )
}

export default DispatchSection