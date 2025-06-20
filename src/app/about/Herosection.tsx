import React from 'react'
import styles from './about.module.scss';
import Image from 'next/image';

const Herosection = () => {
  return (
    <div className={styles.heroSection}>
        <Image className={styles.aboutImage} src={'/svgs/aboutLogo.svg'} alt={'About Logo'} width={938} height={411} />
        <div className={styles.description}>

        <h1 className={styles.heading}>
        For Builders <br/>by Builders
        </h1>
        <p className={styles.subhead}>We are a Pan-African community of technologists, engineers, and founders advancing financial innovation through shared knowledge, infrastructure, and collective growth.</p>
        </div>
    </div>
  )
}

export default Herosection;