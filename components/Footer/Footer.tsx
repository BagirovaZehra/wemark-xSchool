  'use client'
  import Link from 'next/link';
  import styles from './Footer.module.css';
  import Image from 'next/image';

  export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <h4>Sitemap</h4>
            <ul>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Career</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">News</Link></li>
              <li><Link href="#">Vacancies</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Follow Us On</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Office</h4>
            <p>Alibeyov Gardashlari 27,<br />Sabail, Sabah Residence</p>
          </div>
          <div className={styles.column}>
            <h4>For Partnerships</h4>
            <p>partnership@wemark.az<br />+994 51 555 55 55</p>
          </div>
          <div className={styles.arrowUp}>
            <Image className={styles.arrow} alt='logo' width={74} height={57} src="images/arrow.svg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </div>

          <div className={styles.langMobile}>
            <Image
              src="images/globe.svg"
              alt="Language"
              width={20}
              height={20}
            />
            <pre>AZƏRBAYCAN DİLİ | ENGLISH</pre>
          </div>

        </div>

        <div className={styles.logoSection}>
          <Image src="images/footerlogo.svg"
            alt="Wemark Logo"
            width={800}
            height={200}
            className={styles.logoImage} />
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.legalInfo}>
            <p>COPYRIGHT © 2024 WEMARK</p>
            <p className={styles.terms}>TERMS & PRIVACY</p>
          </div>
          <div className={styles.lang}>
            <Image
              src="images/globe.svg"
              alt="Language"
              width={20}
              height={20}
            />
            <span>AZƏRBAYCAN DİLİ</span>
          </div>
          <div className={styles.arrowUpMobile}>BACK TO TOP
            <Image className={styles.arrow} alt='logo' width={74} height={57} src="images/arrow.svg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </div>
        </div>
      </footer>
    );
  }