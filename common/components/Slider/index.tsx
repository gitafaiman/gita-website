import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SliderProps {
  items: React.ReactNode[];
  speed?: number;
  direction?: 'left' | 'right'; // New prop for controlling direction
}

const SliderContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  transform: rotate(-10deg);
  display: flex;
  align-items: center;
  position: relative;
`;

const SliderTrack = styled.div<{ speed: number; direction: 'left' | 'right' }>`
  display: flex;
  width: max-content;
  animation: ${({ speed, direction }) =>
    direction === 'left'
      ? `scrollLeft ${speed}s linear infinite`
      : `scrollRight ${speed}s linear infinite`};

  @keyframes scrollLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes scrollRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

const Slide = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;
`;

const Slider: React.FC<SliderProps> = ({ items, speed = 10, direction = 'left' }) => {
  const [loopItems, setLoopItems] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Ensure continuous looping by duplicating the items
    const repeatedItems = [...items, ...items]; // Duplicate array to avoid gaps
    setLoopItems(repeatedItems);
  }, [items]);

  return (
    <SliderContainer>
      <SliderTrack speed={speed} direction={direction}>
        {loopItems.map((item, index) => (
          <Slide key={index}>{item}</Slide>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default Slider;
