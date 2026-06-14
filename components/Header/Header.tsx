"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerContainer}>
        
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <Image 
              src="/images/logo.svg" 
              alt="Wemark Logo"
              width={119} 
              height={19} 
              priority 
            />
          </Link>
        </div>

        <nav className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <Link href="#about" onClick={closeMenu}>About</Link>
          <Link href="#services" onClick={closeMenu}>Services</Link>
          <Link href="#cases" onClick={closeMenu}>Case Studies</Link>
          <Link href="#career" onClick={closeMenu}>Career</Link>
          <Link href="#blog" onClick={closeMenu}>Blog</Link>
          <Link href="#xschool" onClick={closeMenu}>xSchool</Link>
        
        </nav>

        <div className={styles.headerAction}>
          <Link href="#contact" className={styles.talkBtn}>
            Let's Talk
          </Link>
        </div>

        <button className={styles.menuTextBtn} onClick={toggleMenu}>
          {isOpen ? "Close" : "Menu"}
        </button>

      </div>
    </header>
  );
}