import styles from './About.module.css'

const values = [
  { title: 'Detail-Obsessed', desc: 'No element is too small. We craft every touchpoint with precision.' },
  { title: 'People-First', desc: 'Your vision drives our process. We listen before we plan.' },
  { title: 'Local Roots', desc: 'Deep Costa Rican connections mean better venues, vendors, and experiences.' },
]

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.imageCol}>
            <div className={styles.imageStack}>
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Our team at work"
                className={styles.imgMain}
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=400&q=80"
                alt="Event detail"
                className={styles.imgAccent}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.textCol}>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Born From a Love of Bringing People Together</h2>
            <p className={styles.body}>
              Founded in San José in 2012, Pura Vida Events grew from a small family operation into
              Costa Rica's most trusted event design studio. We combine the warmth of local culture
              with world-class production standards.
            </p>
            <p className={styles.body}>
              Whether it's an intimate garden wedding or a 500-person conference at a five-star resort,
              our team of 20+ passionate planners, designers, and coordinators bring your vision to life
              with grace and precision.
            </p>

            <ul className={styles.values}>
              {values.map(v => (
                <li key={v.title} className={styles.value}>
                  <span className={styles.valueDot} />
                  <div>
                    <strong className={styles.valueTitle}>{v.title}</strong>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary" style={{ marginTop: 'var(--space-8)', display: 'inline-flex' }}>
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
