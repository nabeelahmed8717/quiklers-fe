import React, { useEffect, useRef, useState } from 'react';
import './maxScroll.scss';

const MaxScroll = ({ children }: any) => {
  const [showBoxShadow, setShowBoxShadow] = useState(false);
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableRef.current;

        const isScrolledToBottom = scrollHeight - scrollTop === clientHeight;
        setShowBoxShadow(!isScrolledToBottom);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={scrollableRef} className={`overF-80v ${showBoxShadow ? 'show-box-shadow' : ''}`}>
      {children}
    </div>
  );
};

export default MaxScroll;
