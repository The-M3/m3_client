'use client'

import { useEffect, useState } from 'react'
import styles from './EventsSection.module.scss'

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className={styles.countdown}>
      <TimeBox value={timeLeft.days} label="DAYS" />
      <span className={styles.separator}>:</span>
      <TimeBox value={timeLeft.hours} label="HRS" />
      <span className={styles.separator}>:</span>
      <TimeBox value={timeLeft.minutes} label="MINS" />
    </div>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.box}>
      <div className={styles.value}>{value.toString().padStart(2, '0')}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

function getTimeRemaining(target: string) {
  const total = Date.parse(target) - Date.now()
  const totalInMinutes = Math.floor(total / 1000 / 60)
  const minutes = totalInMinutes % 60
  const hours = Math.floor(totalInMinutes / 60) % 24
  const days = Math.floor(totalInMinutes / 60 / 24)
  return { total, days, hours, minutes }
}
