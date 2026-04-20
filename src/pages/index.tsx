import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './index.module.css';

const sections = [
  {
    title: 'HR Management',
    description:
      'Cover employee records, attendance, payroll, leave, and related HR processes.',
    to: '/docs/category/hr-management',
  },
  {
    title: 'Mobile Application',
    description:
      'Document the mobile-facing HR experience for employees and supervisors.',
    to: '/docs/category/mobile-application',
  },
  {
    title: 'Base Data',
    description:
      'Manage core master data, setup records, and foundational configuration.',
    to: '/docs/category/base-data',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {customFields} = siteConfig;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.metadata}>
          <p>
            <strong>Prepared By:</strong> {customFields.preparedBy as string}
          </p>
          <p>
            <strong>Date:</strong> {customFields.date as string}
          </p>
          <p>
            <strong>Version:</strong> {customFields.version as string}
          </p>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Open documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for HR management and base data">
      <HomepageHeader />
      <main>
        <section className={styles.sections}>
          <div className="container">
            <div className="row">
              {sections.map((section) => (
                <div key={section.title} className="col col--6 margin-bottom--lg">
                  <Link className={styles.card} to={section.to}>
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
