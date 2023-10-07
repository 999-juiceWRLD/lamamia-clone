// 'use client';

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

const getData = async () => {
  const res = await fetch('http://localhost:8000/api/posts', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  return res.json();
}

const Blog = async () => {

  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map(item => (
        <Link key={item.id} href={`/blog/${item._id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image 
              src={item.image}
              alt=''
              width={450}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;