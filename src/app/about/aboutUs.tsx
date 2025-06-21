import React from 'react'
import styles from './about.module.scss';
import Image from 'next/image';


const founder = {
  name: 'Josh',
  title: 'Founder, The M3',
  imageUrl: '/images/founder.png',
  imageAlt: 'Josh - Founder, The M3'
}

const AboutUs = () => {
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

      <div className={styles.founderSection}>
        <div className={styles.founderContentLeft}>
          <div className={styles.founderContainer}
            style={{ backgroundImage: `url(${founder.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
            <div className={styles.founderInfo}>
              <h3 className={styles.founderName}>{founder.name}</h3>
              <p className={styles.founderTitle}>
                {founder.title}
              </p>
            </div>
          </div>

          <p className={styles.founderQuote}>
            When we began this journey, the goal was simple: to create a platform where Africa&apos;s payment technologists could access technical depth, industry insights, and a network as ambitious as they are. Today, that vision is becoming reality, and I am grateful to stand alongside a growing community of technical implementers, decision-makers, regulators, and ecosystem enablers who are passionate about shaping the future of fintech on the continent.</p>
          <p className={styles.founderQuote}>We believe the future of finance in Africa won&apos;t be imported it will be designed here, by people who understand the nuances of our markets, the power of collaboration, and the impact of open knowledge. That&apos;s what The M3 represents.</p>
          <p className={styles.founderQuote}>To everyone who shares in this mission thank you. Whether you&apos;re building infrastructure, writing policy, or investing in ideas, you are a vital part of this movement.</p>

        </div>

        <div className={styles.founderContentRight}>
          <h1 className={styles.founderContentRightHeading}>To the Builders Powering Africa&apos;s Payment Future</h1>
          <p className={styles.founderQuote}>
            I&apos;m incredibly proud to welcome you to The M3 a community born from the belief that Africa&apos;s payment ecosystem deserves not only to catch up, but to lead globally.
          </p><p className={styles.founderQuote}>
            As someone who has spent years at the intersection of technology, infrastructure, and financial systems across the continent, I&apos;ve witnessed firsthand both the challenges and the extraordinary potential that exists here. The M3 was created to unlock that potential by building a space where the builders, thinkers, and enablers of African fintech can connect, collaborate, and grow together.
          </p>

          <div className={styles.handshakeImage}>
            <Image 
              src={'/images/handshake.png'} 
              alt={'handshake'} 
              fill
              style={{ objectFit: 'cover' }} 
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs;