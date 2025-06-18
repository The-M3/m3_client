import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs'
import styles from './EventsSection.module.scss';
import { Button } from '../ui';
import Countdown from './Countdown';

type FeaturedEventProps = {
  title: string;
  location: string;
  date: string;
  description: string;
  speakers: string;
  imageSrc: string;
};

const FeaturedEvent = ({
  title,
  location,
  date,
  description,
  speakers,
  imageSrc
}: FeaturedEventProps) => {
  const formattedDate = dayjs(date).format('MMMM D, YYYY — h:mm A  [WAT]')

  return (
    <div className={styles.featuredEvent}>
      <div className={styles.featuredEventTop} style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
        <Countdown targetDate={date} />
        <div className={styles.eventContent}>
          <h2 className={styles.eventTitle}>{title}</h2>
          <p className={styles.eventLocation}>{location}</p>
          <p className={styles.eventDate}>{formattedDate}</p>
        </div>
      </div>
      <div className={styles.featuredEventBottom}>
        <p className={styles.eventDescription}>{description}</p>
        <p className={styles.eventSpeakers}><span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>SPEAKERS :</span> {speakers}</p>
        <Button className={styles.ticketButton}>GET EVENT TICKET</Button>
      </div>
    </div>
  );
};

type UpcomingEventProps = {
  date: string;
  title: string;
};

const UpcomingEvent = ({ date, title }: UpcomingEventProps) => {
  const day = dayjs(date).format('DD')
  const month = dayjs(date).format('MMM')
  return (
    <div className={styles.upcomingEvent}>
      <div className={styles.upcomingEventDate}>
        {`${month} ${day}`}
      </div>
      <div className={styles.upcomingEventContent}>
        <h4 className={styles.upcomingEventTitle}>{title}</h4>
        <Button className={styles.upcomingEventButton}>
          <span>EVENT DETAILS</span>
          <Image src="/svgs/rightArrow.svg" alt="Right Arrow" width={11} height={7} />
        </Button>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const featuredEvent = {
    title: "Securing Africa's Digital Wallets",
    location: "Lagos, Nigeria",
    date: "2025-06-22T16:00:00",
    description: "Discover the critical security strategies fintech leaders are using to protect digital wallets across the continent. Adaobi will share real-world breach case studies, encryption standards, and how to stay compliant in a shifting regulatory landscape.Discover the critical security strategies fintech Discover the critical security strategies fintech Discover the critical security strategies fintech",
    speakers: "John Doe, Jane Smith",
    imageSrc: "/images/featureImage.png"
  }
  return (
    <section className={styles.eventsSection}>
      <h2 className={styles.title}>Upcoming Events</h2>

      <div className={styles.eventGrid}>
        <FeaturedEvent
          {...featuredEvent}
        />

        <UpcomingEvent
          date="2025-06-22T16:00:00"
          title="How Central Bank’s Policies Shape Fintech Startups"
        />
        <UpcomingEvent
          date="2025-07-04T16:00:00"
          title="How Central Bank’s Policies Shape Fintech Startups"
        />
        <UpcomingEvent
          date="2025-08-15T16:00:00"
          title="How Central Bank’s Policies Shape Fintech Startups"
        />
      </div>

    </section>
  );
};

export default EventsSection;
