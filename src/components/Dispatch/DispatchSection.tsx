"use client"

import React from 'react'
import styles from './DispatchSection.module.scss'
import { Button } from '../ui'
import supabase from '../../../supabase-client';
import { toast, ToastContainer } from 'react-toastify'
import { Msg } from '@/app/community/CommunityForm';

const DispatchSection = () => {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handlSendDelivery = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.from("newsletter").insert({ email }).single()
      if (error) {
        console.error(error)
        toast.error(Msg({ data: { title: "Something went wrong!", text: error?.message} }));
      } else {
        toast.success("Thank you!");
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong!");
    }
    setIsLoading(false);
  }

  return (
    <>
    <ToastContainer />
    <section className={styles.dispatchSection}>
      <h2 className={styles.title}>The M3 Dispatch</h2>
      <p className={styles.description}>
        Get curated insights, event updates, and behind-the-scenes access to the people and ideas driving Africa’s payment ecosystem, delivered straight to your inbox.            </p>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder='email@email.com' onChange={(e) => setEmail(e.target.value)} />
        <Button isLoading={isLoading} onClick={handlSendDelivery} theme='secondary' className={styles.btn}>
          SEND DELIVERY
        </Button>

      </div>
    </section>
    </>
  )
}

export default DispatchSection