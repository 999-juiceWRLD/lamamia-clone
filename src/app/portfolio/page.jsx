'use client';

import React from 'react'
import Link from 'next/link';
import styles from './page.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const Portfolio = () => {

  const { mode } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href='/portfolio/illustrations' className={styles.item}>
          <span className={`${styles.title} ${mode === 'light' ? styles.titleLight : null}`}>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className={styles.item}>
          <span className={`${styles.title} ${mode === 'light' ? styles.titleLight : null}`}>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className={styles.item}>
          <span className={`${styles.title} ${mode === 'light' ? styles.titleLight : null}`}>Application</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;