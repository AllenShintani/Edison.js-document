import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/Led.svg').default,
    description: (
      <>
      Edison is a library for controlling the Arduino with TypeScript. It is designed to be easy to use and easy to learn.

      </>
    ),
  },
  {
    title: 'TypeScript and JavaScript',
    Svg: require('@site/static/img/tsJs.svg').default,
    description: (
      <>
        Edison supports both TypeScript and JavaScript. You can use the language you are most comfortable with.
      </>
    ),
  },
  {
    title: 'Developer friendly',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This library is concerned with ease of use. Our mission is not to chase a few tenths of a millisecond, but to make it extensible and to give shape to what we like.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
