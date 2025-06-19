"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './ArticleCarousel.module.scss';

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const articlesData: Article[] = [
  {
    id: '1',
    title: "Designing for Compliance: A Developer's Guide to Staying Ahead",
    description: "Compliance isn't a checkbox. It's a design challenge. This guide breaks down how developers can build systems that adapt to evolving regulations without sacrificing speed or user experience.",
    imageUrl: '/images/carousel-01.png',
  },
  {
    id: '2',
    title: "Africa Doesn't Need More Fintechs. It Needs Better Infrastructure.",
    description: "The future of African payments won't be built on flashy apps—it'll be built on the rails underneath. Here's why infrastructure, not more fintechs, is the real unlock.",
    imageUrl: '/images/carousel-01.png',
  },
  {
    imageUrl: '/images/carousel-01.png',

    id: '3',
    title: "5 Things I Wish I'd Known Before Expanding to African Markets",
    description: "Entering African payment markets comes with unique dependencies. Here's what experienced engineering teams overlook.",
    },
  {
    imageUrl: '/images/carousel-01.png',

    id: '4',
    title: "Building Cross-Border Payment Systems: Lessons from the Field",
    description: "Real-world insights from engineering teams who've tackled the complexity of multi-currency, multi-regulatory payment systems across Africa.",
  },
  {
    imageUrl: '/images/carousel-01.png',
    id: '5',
    title: "The Hidden Costs of Payment Infrastructure in Emerging Markets",
    description: "Beyond transaction fees lies a web of hidden costs that can make or break your payment product. Here's what to budget for.",
  }
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className={styles.articleCard}>
      <div className={styles.imageContainer} style={{backgroundImage: `url(${article.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.description}>{article.description}</p>
      </div>
    </div>
  );
};

const ArticleCarousel: React.FC = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eventsLeftOffset, setEventsLeftOffset] = useState<number>(0);
  const carouselRef = useRef<HTMLElement>(null);
  
  const cardsToShow = 2;
  const maxIndex = articlesData.length - cardsToShow;

  // Dynamically measure EventsSection left offset
  useEffect(() => {
    const measureEventsOffset = () => {
      // Look for EventsSection by class name pattern
      const eventsSection = document.querySelector('[class*="eventsSection"]') as HTMLElement;
      
      if (eventsSection) {
        const rect = eventsSection.getBoundingClientRect();
        const leftOffset = rect.left + window.scrollX;
        setEventsLeftOffset(leftOffset);
        
        // Apply the offset to carousel track padding
        if (carouselRef.current) {
          const carouselTrack = carouselRef.current.querySelector('[class*="carouselTrack"]') as HTMLElement;
          if (carouselTrack) {
            // carouselTrack.style.paddingLeft = `${leftOffset}px`;
          }
        }
      }
    };

    // Measure on mount and window resize
    measureEventsOffset();
    window.addEventListener('resize', measureEventsOffset);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', measureEventsOffset);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const renderArrowIcon = (dir?: 'left' | 'right') => {
    return <svg width="42" style={{transform: dir === 'left' ? 'rotate(180deg)' : 'none'}} height="24" viewBox="0 0 11 7" fill="none">
    <path d="M0.242794 3.00658H8.88207L7.10574 1.23025L7.79654 0.539459L10.7571 3.5L7.79654 6.46055L7.10574 5.76975L8.88207 3.99343H0.242794V3.00658Z" fill="#DAA765" />
  </svg>
  }

  return (
    <section className={styles.articleCarousel} ref={carouselRef} style={{marginLeft: eventsLeftOffset}}>
      <div className={styles.articleHeader}>
        <h2 className={styles.articleTitle}>From Across The M3</h2>
        <p className={styles.articleSubtitle}>
        An evolving stream of ideas, hard-earned lessons, and practical insights. From infrastructure deep dives to real-world implementation stories, this is where The M3 shares what actually works.
        </p>
      </div>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
          }}
        >
          {articlesData.map((article) => (
            <div key={article.id} className={styles.carouselSlide}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          aria-label="Previous articles"
        >
          {renderArrowIcon('left')}
        </button>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next articles"
        >
           {renderArrowIcon()}
        </button>
      </div>
    </section>
  );
};

export default ArticleCarousel;
