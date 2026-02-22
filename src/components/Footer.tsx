import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Pura Vida Events</span>
          <p className={styles.tagline}>Crafting unforgettable moments in Costa Rica since 2012.</p>
        </div>
        <nav className={styles.links}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} Pura Vida Events. All rights reserved.</p>
      </div>
    </footer>
  )
}
