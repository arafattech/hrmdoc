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
      'Cover employee records, attendance, payroll, leave, and related HR processes, plus user and role administration.',
    to: '/docs/category/hr-management',
  },
  {
    title: 'Task Management',
    description:
      'Track tasks, assignments, priorities, and progress in a standalone module.',
    to: '/docs/category/task-management',
  },
  {
    title: 'Brochure',
    description:
      'Showcase the company brochure, services, and product highlights.',
    to: '/brochure',
  },
  {
    title: 'Mobile Application',
    description:
      'Document the mobile-facing HR experience for employees and supervisors.',
    to: '/docs/category/mobile-application',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          HRM
        </Heading>
        <p className={styles.heroMeta}>
          <strong>Prepared By:</strong> {siteConfig.customFields.preparedBy as string}
        </p>

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
      description="HRM documentation">
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
