import React from 'react'
import Image from 'next/image';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 Lamamia Inc. All rights reserved.</div>
      <div className={styles.social}>
          <Image src='/1.png' width={15} height={15} className={styles.icon} alt='lama-dev-face' />
          <Image src='/2.png' width={15} height={15} className={styles.icon} alt='lama-dev-insta' />
          <Image src='/3.png' width={15} height={15} className={styles.icon} alt='lama-dev-twitter' />
          <Image src='/4.png' width={15} height={15} className={styles.icon} alt='lama-dev-youtube' />
      </div>
    </div>
  );
}

export default Footer;