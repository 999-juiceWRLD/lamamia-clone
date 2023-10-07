"use client"

import React from 'react'
import Link from 'next/link';
import styles from './navbar.module.css'
import DarkMode from '../Theme/DarkMode';
import { signOut, useSession } from 'next-auth/react';

const links = [
  {
    id: 1,
    title: 'Homepage',
    url: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 4,
    title: 'About',
    url: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard'
  },
]

const Navbar = () => {

  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>lamamia</Link>
      <div className={styles.links}>
        <DarkMode />
        { links.map(e => (
          <Link key={e.id} href={e.url} className={styles.link}>{e.title}</Link>
        )) }
        { session.status === 'authenticated' &&  <button className={styles.logout} onClick={signOut}>Logout</button> }
      </div>
    </div>
  );
}

export default Navbar;