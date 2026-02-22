import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.info}>
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">Let's Create Something Extraordinary</h2>
            <p className="section-subtitle">
              Tell us about your vision and we'll get back to you within 24 hours with
              ideas and availability.
            </p>

            <ul className={styles.details}>
              <li>
                <span className={styles.detailIcon}>📍</span>
                <span>San José, Costa Rica</span>
              </li>
              <li>
                <span className={styles.detailIcon}>📞</span>
                <span>+506 2234-5678</span>
              </li>
              <li>
                <span className={styles.detailIcon}>✉️</span>
                <span>hello@puravidaevents.cr</span>
              </li>
            </ul>
          </div>

          <div className={styles.formWrap}>
            {sent ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <h3>Message sent!</h3>
                <p>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Jane Smith" required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="jane@example.com" required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="event">Event Type</label>
                  <select id="event" name="event" required>
                    <option value="">Select a category…</option>
                    <option>Wedding / Ceremony</option>
                    <option>Corporate Event</option>
                    <option>Private Celebration</option>
                    <option>Cultural / Social Gala</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Tell us about your event</label>
                  <textarea id="message" name="message" rows={5} placeholder="Date, guest count, venue ideas…" required />
                </div>
                <button type="submit" className="btn-primary">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
