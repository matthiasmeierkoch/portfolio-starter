// components/HeroContributionGrid.js

import React, { useMemo } from 'react';
import styles from './HeroContributionGrid.module.css';

const HeroContributionGrid = () => {
  const ROWS = 5;
  const COLS = 24;
  const OPACITY_VALUES = [0.05, 0.1, 0.2, 0.4, 0.6, 0.8];

  // Generate random opacity values from the allowed set
  const gridData = useMemo(() => {
    const data: number[] = [];
    for (let i = 0; i < ROWS * COLS; i++) {
      const opacity = OPACITY_VALUES[Math.floor(Math.random() * OPACITY_VALUES.length)];
      data.push(opacity);
    }
    return data;
  }, [ROWS, COLS]);

  return (
    <div className={styles.contributionGridContainer} role="presentation">
      {gridData.map((opacity, index) => (
        <div
          key={index}
          className={styles.square}
          style={{
            '--final-opacity': opacity,
            '--delay': `${Math.random() * 1.2}s`,
          } as React.CSSProperties}
          title={`Contribution Opacity: ${opacity}`}
        />
      ))}
    </div>
  );
};

export default HeroContributionGrid;