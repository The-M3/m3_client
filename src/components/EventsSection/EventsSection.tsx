import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs'
import styles from './EventsSection.module.scss';
import { Button } from '../ui';
import Countdown from './Countdown';
import supabase from '../../../supabase-client';

type FeaturedEventProps = {
  data: Event
};

export interface Event {
  id?: string;              // UUID, auto-generated
  title: string;           // Required
  location: string;        // Required
  startDateTime: string;     // Required
  timezone?: string;       // Optional
  description: string;     // Required
  speakers: string[];      // Array of speaker names
  isVirtual: boolean;      // Default: false
  ticketLink?: string;     // Optional
  hasEnded: boolean;       // Default: false
  created_at?: Date;         // Auto-generated
  updated_at?: Date;         // Auto-generated
  bannerImage?: string;
}


const FeaturedEvent = ({
  data
}: FeaturedEventProps) => {
  const formattedDate = dayjs(data?.startDateTime).format(`MMMM D, YYYY — h:mm A  [${data?.timezone || 'WAT'}]`)
  const inputDate = dayjs(data?.startDateTime); // or any date
  const now = dayjs();
  const isPast = inputDate.isBefore(now);
  const fallBackImage = '/images/featureImage.png'

  return (
    <div className={styles.featuredEvent}>
      <div className={styles.featuredEventTop} style={{ backgroundImage: `url(${data?.bannerImage || fallBackImage})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
       {isPast ? null : <Countdown targetDate={data?.startDateTime} />}
       <div className={styles.eventContent}>
          <h2 className={styles.eventTitle}>{data?.title}</h2>
          <p className={styles.eventLocation}>{data?.location}</p>
          <p className={styles.eventDate}>{formattedDate}</p>
        </div>
      </div>
      <div className={styles.featuredEventBottom}>
        <p className={styles.eventDescription}>{data?.description}</p>
        <p className={styles.eventSpeakers}><span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>SPEAKERS :</span> {data?.speakers.join(", ")}</p>
        <a target='_blank' href={data?.ticketLink || "#"}><Button className={styles.ticketButton}>GET EVENT TICKET</Button></a>
      </div>
    </div>
  );
};

type UpcomingEventProps = {
  date: string;
  title: string;
  ticketLink: string;
};

const UpcomingEvent = ({ date, title, ticketLink }: UpcomingEventProps) => {
  const day = dayjs(date).format('DD')
  const month = dayjs(date).format('MMM')
  return (
    <div className={styles.upcomingEvent}>
      <div className={styles.upcomingEventDate}>
        {`${month} ${day}`}
      </div>
      <div className={styles.upcomingEventContent}>
        <h4 className={styles.upcomingEventTitle}>{title}</h4>
        <a target='_blank' href={ticketLink}>
          <Button className={styles.upcomingEventButton}>
            <span>EVENT DETAILS</span>
            <Image src="/svgs/rightArrow.svg" alt="Right Arrow" width={11} height={7} />
          </Button>
        </a>
      </div>
    </div>
  );
};
const pageSize = 4; 
const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [featuredEvent, setFeaturedEvent] = useState<Event | null>(null);


  const filterEvent = (list: Event[]) => {
    const newEvents = list.filter((event) => {
      const inputDate = dayjs(event?.startDateTime); // or any date
      const now = dayjs();
      const isPast = inputDate.isBefore(now);
      return !isPast
    })

    return newEvents
  }

  const fetchEvents = async () => {
    try {
      setLoading(true);
      // Fetch events
      const { data, error } = await supabase
        .from('events')
        .select('*', { count: 'exact' })
        .order('startDateTime', { ascending: true })
        .range(0, pageSize);
      
      if (error) {
        throw error;
      }

      if (data) {
        console.log('data', data)
        const res = filterEvent(data)
        console.log('res', res)
        setEvents(res);
        setFeaturedEvent(res[0]);
      }
    } catch (err: { message: string } | unknown) {
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);


  return (
    <section id="events-section" className={styles.eventsSection}>
      <h2 className={styles.title}>Explore What’s Ahead in the M3 Community</h2>
      <p className={styles.subTitle}>
      Join us for dynamic hybrid events that bring together carefully selected in-person gatherings across key African cities with comprehensive virtual sessions led by industry experts.
      Experience meaningful connections with professionals from across the continent, witness cutting-edge innovation demos, and participate in impactful strategic discussions.

      </p>
      {
        events.length === 0 && (<div className={styles.noEvents}>
          <p>Please stay tuned for more events</p>
        </div>)
      }

      {loading ? (
        <div className={styles.spinner} />
      ) : (
        <div className={styles.eventGrid}>
        {featuredEvent && <FeaturedEvent
          data={featuredEvent as Event}
        />}

        {
          events.filter((_, index) => index > 0).map((event) => (
            <UpcomingEvent
              date={event?.startDateTime}
              title={event?.title}
              ticketLink={event?.ticketLink || "#"}
              key={event?.id}
          />
          ))
        }
      </div>
      )}  
    </section>
  );
};

export default EventsSection;
