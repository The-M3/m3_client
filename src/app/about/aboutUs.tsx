import React from 'react'
import styles from './about.module.scss';
import Image from 'next/image';

const founder = {
  name: 'Josh',
  title: 'Founder, The M3',
  imageUrl: '/images/MrJoshua.jpeg',
  imageAlt: 'Josh - Founder, The M3'
}

const AboutUs = () => {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.aboutTopSection}>
        <Image 
          className={styles.aboutImage} 
          src={'/svgs/aboutLogo.svg'} 
          alt={'About Logo'} 
          width={938} 
          height={411}
          priority
          quality={95}
        />
        <div className={styles.description}>

          <h1 className={styles.heading}>
            For Builders <br />by Builders
          </h1>
          <p className={styles.subhead}>
          We unite business owners, engineering leaders, product leaders, compliance and other experts to advance financial technology through shared knowledge and collaboration.
          </p>
          <p className={styles.subhead}>
          Our community members build payment solutions, share expertise, and create the infrastructure that drives breakthrough innovations. Join the leaders shaping the future of digital finance.
          </p>
        </div>
      </div>

      <div className={styles.whoSection}>
        <h1 className={styles.whoHeading}>Who’s the community for?</h1>
        <div className={styles.whoList}>
          <div className={styles.whoItem}>
            <Image 
              className={styles.whoImage} 
              width={268} 
              height={462} 
              style={{ objectFit: 'cover' }} 
              src={'/images/about1.jpeg'} 
              alt={'team business people collaborating plan financial strategy doing teamwork create sales report laptop office employees working project strategy analyze career growth'}
              quality={95}
              sizes="(max-width: 500px) 0px, (max-width: 1109px) 100vw, 268px"
            />
            <div className={styles.whoItemContent}>
              <h1 className={styles.whoItemHeading}>Technical Implementation</h1>
              <p className={styles.whoItemDescription}>
              The people funding, building, and scaling Africa&apos;s payment revolution need better connections. The M3 bridges that gap. We connect investors, partners, policy makers, and accelerators with the engineers, product leaders, and operators actually building payment solutions across Africa.
              Get real-time market intelligence. Access key decision-makers. Shape the future of African payments.

              </p>
            </div>
          </div>
          <div className={styles.whoItem}>
            <Image 
              className={styles.whoImage} 
              width={268} 
              height={462} 
              style={{ objectFit: 'cover' }} 
              src={'/images/about2.jpg'} 
              alt={'hr team interviewing female candidate'}
              quality={95}
              sizes="(max-width: 500px) 0px, (max-width: 1109px) 100vw, 268px"
            />
            <div className={styles.whoItemContent}>
              <h1 className={styles.whoItemHeading}>Strategic Decision Makers</h1>
              <p className={styles.whoItemDescription}>
                CTOs, founders, and payment leaders shaping fintech strategy. The M3 offers them trend analysis, access to talent, and a powerful network of fellow innovators.                </p>
            </div>
          </div>
          <div className={styles.whoItem}>
            <Image 
              className={styles.whoImage} 
              width={268} 
              height={462} 
              style={{ objectFit: 'cover' }} 
              src={'/images/about3.jpg'} 
              alt={'medium shot colleagues discussing table'}
              quality={95}
              sizes="(max-width: 500px) 0px, (max-width: 1109px) 100vw, 268px"
            />
            <div className={styles.whoItemContent}>
              <h1 className={styles.whoItemHeading}>Regulatory & Compliance Specialists</h1>
              <p className={styles.whoItemDescription}>
                Risk managers and technical compliance officers navigating complex regulatory environments. They rely on The M3 to stay current, exchange knowledge, and contribute to evolving standards.                </p>
            </div>
          </div>
          <div className={styles.whoItem}>
            <Image 
              className={styles.whoImage} 
              width={268} 
              height={462} 
              style={{ objectFit: "cover" }} 
              src={'/images/about4.jpeg'} 
              alt={'smiley coworkers office conversing'}
              quality={95}
              sizes="(max-width: 500px) 0px, (max-width: 1109px) 100vw, 268px"
            />
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
          That&apos;s exactly why I built The M3. We needed a place where the people building African fintech could meet the people funding it, regulating it, and using it. Where engineers could talk directly to policy makers. Where founders could learn from operators who&apos;ve solved similar challenges.
          </p>
          <p className={styles.founderQuote}>
          Africa&apos;s payment future is being designed right here by people who understand that a farmer in Ghana has different needs than a trader in Lagos, and that both deserve world-class solutions.
          </p>
          <p className={styles.founderQuote}>
          The M3 is where those solutions get born, tested, and scaled together.
          </p>

        </div>

        <div className={styles.founderContentRight}>
          <h1 className={styles.founderContentRightHeading}>To the Builders Powering Africa&apos;s Payment Future</h1>
          <p className={styles.founderQuote}>
          In the last ten years, I&apos;ve been knee-deep in Africa&apos;s payments world. From helping farmers save just $1 a week through USSD to buy seeds and fertilizer, to building payment systems that moved millions of dollars globally.
          </p><p className={styles.founderQuote}>
          But here&apos;s what I keep running into: brilliant companies struggle with integration headaches. Policy makers create regulations without understanding technical realities. Talented builders work in isolation when they should be learning from each other.
These aren&apos;t technical problems; they&apos;re connection problems.
          </p>

          <div className={styles.handshakeImage}>
            <Image 
              src={'/images/team-meetup.jpg'} 
              alt={'team-business-people-collaborating-plan-financial-strategy-doing-teamwork-create-sales-report-laptop-office-employees-working-project-strategy-analyze-career-growth'} 
              fill
              style={{ objectFit: 'cover' }}
              quality={95}
              sizes="(max-width: 500px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs;