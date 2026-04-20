import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
    title: 'Easy to Use',
    img: require('@site/static/img/data-management.png').default,
    description: (
      <>
        Built with usability in mind, our MES platform ensures a smooth
        onboarding experience for all users.
      </>
    ),
  },
  {
    title: 'Base Data',
    img: require('@site/static/img/base-data.png').default,
    description: (
      <>
        Manage your core manufacturing data efficiently with our centralized
        Base Data module.
      </>
    ),
  },

  {
    title: 'Sales Analytics',
    img: require('@site/static/img/sales-analytics.png').default,
    description: (
      <>
        Gain deep insights into your sales performance with real-time
        analytics and comprehensive dashboards.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
