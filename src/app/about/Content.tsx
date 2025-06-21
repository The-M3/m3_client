import React from 'react'
import styles from './about.module.scss';
import Image from 'next/image';

const Content = () => {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.aboutTopSection}>
      <Image className={styles.aboutImage} src={'/svgs/aboutLogo.svg'} alt={'About Logo'} width={938} height={411} />
      <div className={styles.description}>

        <h1 className={styles.heading}>
          For Builders <br />by Builders
        </h1>
        <p className={styles.subhead}>We are a Pan-African community of technologists, engineers, and founders advancing financial innovation through shared knowledge, infrastructure, and collective growth.</p>
      </div>
      </div>

      <div className={styles.whoSection}>
        <h1 className={styles.whoHeading}>Who’s the community for?</h1>
        <div className={styles.whoList}>
          <div className={styles.whoItem}>
            <Image className={styles.whoImage} width={268} height={462} style={{ objectFit: 'cover' }} src={'/images/who1.png'} alt={'Who 1'} />
            <div className={styles.whoItemContent}>
              <h1 className={styles.whoItemHeading}>Technical Implementers</h1>
              <p className={styles.whoItemDescription}>Developers, engineers, and infrastructure leads building payment systems across Africa. They turn to The M3 for deep technical resources, peer collaboration, and implementation insights.</p>
            </div>
          </div>
          <div className={styles.whoItem}>
            <Image className={styles.whoImage} width={268} height={462} style={{ objectFit: 'cover' }} src={'/images/who1.png'} alt={'Who 1'} />
            <div className={styles.whoItemContent}>
              <h1 className={styles.whoItemHeading}>Strategic Decision Makers</h1>
              <p className={styles.whoItemDescription}>
                CTOs, founders, and payment leaders shaping fintech strategy. The M3 offers them trend analysis, access to talent, and a powerful network of fellow innovators.                </p>
            </div>
          </div>
          <div className={styles.whoItem}>
            <Image className={styles.whoImage} width={268} height={462} style={{ objectFit: 'cover' }} src={'/images/who1.png'} alt={'Who 1'} />
            <div className={styles.whoItemContent}>
              <h1 className={styles.whoItemHeading}>Regulatory & Compliance Specialists</h1>
              <p className={styles.whoItemDescription}>
                Risk managers and technical compliance officers navigating complex regulatory environments. They rely on The M3 to stay current, exchange knowledge, and contribute to evolving standards.                </p>
            </div>
          </div>
          <div className={styles.whoItem}>
            <Image className={styles.whoImage} width={268} height={462} style={{ objectFit: 'cover' }} src={'/images/who1.png'} alt={'Who 1'} />
            <div className={styles.whoItemContent}>
              <h1 className={styles.whoItemHeading}>Ecosystem Enablers</h1>
              <p className={styles.whoItemDescription}>
                Risk managers and technical compliance officers navigating complex regulatory environments. They rely on The M3 to stay current, exchange knowledge, and contribute to evolving standards.                </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.missionSection}>
        <div className={styles.missionCard} style={{ backgroundImage: `url('/svgs/missionBg.svg')`, backgroundSize: 'cover', }}>
          <h1 className={styles.missionHeading}>Our Mission</h1>
          <p className={styles.missionDescription}>
            To build a connected, informed, and empowered network of Africa’s payment technologists by providing access to technical resources, regional insights, and collaborative opportunities that shape the future of digital finance.
          </p>
        </div>
        <div className={styles.missionCard} style={{ backgroundImage: `url('/svgs/missionBg.svg')`, backgroundSize: 'cover', }}>
          <h1 className={styles.missionHeading}>Our Vision</h1>
          <p className={styles.missionDescription}>
          To be the heartbeat of Africa’s payment technology ecosystem where technologists, leaders, and enablers connect, collaborate, and co-create the future of fintech across the continent.          </p>
        </div>

      </div>
    </section>
  )
}

export default Content;