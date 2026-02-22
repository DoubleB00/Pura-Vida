import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <img
        src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
        alt="Elegant event setup"
        className={styles.bg}
      />
      <div className={`container ${styles.content}`}>
        <p className={styles.label}>Costa Rica's Premier Event Studio</p>
        <h1 className={styles.title}>
          Moments Crafted<br />With Intention
        </h1>
        <p className={styles.subtitle}>
          From intimate gatherings to grand celebrations, we design unforgettable
          experiences rooted in the spirit of Pura Vida.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className="btn-primary">Plan Your Event</a>
          <a href="#services" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}>
            Our Services
          </a>
        </div>
        <div className={styles.stats}>
          {[
            { value: '300+', label: 'Events Produced' },
            { value: '12', label: 'Years of Experience' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
