import styles from './Services.module.css'

const services = [
  {
    icon: '🌺',
    title: 'Weddings & Ceremonies',
    description:
      'Romantic, bespoke ceremonies that capture the beauty of Costa Rica — from beachside vows to lush jungle canopies.',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    icon: '🎉',
    title: 'Corporate Events',
    description:
      'Conferences, retreats, and brand activations designed to inspire your team and impress your stakeholders.',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    icon: '🥂',
    title: 'Private Celebrations',
    description:
      'Milestone birthdays, anniversaries, and dinner parties crafted with meticulous attention to every detail.',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    icon: '🎭',
    title: 'Cultural & Social Galas',
    description:
      'Charity galas, art showcases, and community gatherings that make a lasting impression and meaningful impact.',
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Events Designed to Inspire</h2>
          <p className="section-subtitle">
            Every event is a story. We write yours with creativity, precision, and heart.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map(s => (
            <article key={s.title} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.icon}>{s.icon}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.description}</p>
                <a href="#contact" className={styles.cardLink}>
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
