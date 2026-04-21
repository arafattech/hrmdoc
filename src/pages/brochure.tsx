import Layout from '@theme/Layout';
import type {ReactNode} from 'react';

import styles from './brochure.module.css';

const highlights = [
  {
    title: 'About Us',
    body: 'A compact overview of HybriTech Innovations and the kind of software work it delivers.',
  },
  {
    title: 'Our Process',
    body: 'A visual flow that shows how ideas move from discovery to delivery.',
  },
  {
    title: 'Our Services',
    body: 'Clear service blocks for ERP, HRM, CRM, mobile apps, and custom development.',
  },
];

const features = [
  'HRM Module',
  'Task Management Module',
  'Mobile App',
  'ERP and CRM delivery',
];

export default function Brochure(): ReactNode {
  return (
    <Layout title="Brochure" description="Brochure">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Company Brochure</p>
            <h1>Brochure design with a more editorial, premium layout.</h1>
            <p className={styles.lead}>
              This page presents the brochure artwork in a cleaner structure, with stronger spacing,
              feature callouts, and a clearer separation between the front and back sides.
            </p>

            <div className={styles.highlights}>
              {highlights.map((item) => (
                <article key={item.title} className={styles.highlightCard}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.summaryPanel}>
            <div className={styles.summaryTop}>
              <span className={styles.summaryLabel}>Brochure focus</span>
              <strong>HRM + Task Management</strong>
            </div>
            <ul className={styles.featureList}>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className={styles.artboard}>
          <article className={styles.artCard}>
            <div className={styles.artHeader}>
              <span>Front Side</span>
              <strong>Brand story and services</strong>
            </div>
            <img
              className={styles.artImage}
              src="/img/hr/brochure/brochure-front.png"
              alt="Brochure front side"
            />
          </article>

          <article className={styles.artCard}>
            <div className={styles.artHeader}>
              <span>Back Side</span>
              <strong>Features and contact details</strong>
            </div>
            <img
              className={styles.artImage}
              src="/img/hr/brochure/brochure-back.png"
              alt="Brochure back side"
            />
          </article>
        </section>
      </main>
    </Layout>
  );
}
