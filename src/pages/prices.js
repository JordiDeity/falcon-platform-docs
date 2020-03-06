import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Pricing from './../../src/components/Pricing';

function Prices() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const comingSoon = true;
  return (
    <Layout
      title="Falcon Platform Prices"
      description="Price list for DEITY Falcon Platform plans."
    >
      <header className={classnames("hero hero--theme", styles.heroBanner)} style={{ backgroundImage: "url('../img/pattern-honeycomb-secondary.svg')" }}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">Prices</p>
        </div>
      </header>
      <main>
        <section style={{padding: '2rem 0'}}>
          <div className="container">
            {comingSoon ?
              <p><strong>Coming Soon</strong>, please contact us for more information.</p>
            :
              <Pricing />
            }
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Prices;
