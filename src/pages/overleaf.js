import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">CiteDrive + Overleaf</h1>
        <p className="hero__subtitle">Complete your research pipeline with the powerful one-two pair app.</p>
        <p className=".hero__sub__subtitle">Connect your both APPs, and you will get all updates in your BibTeX file without having to do anything manually in Overleaf - with a few mouse clicks.</p>
        <p className=".hero__sub__subtitle">Focus on your work at Overleaf and leave the tedious formatting of bibliographies and citations to us. </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Getting started
          </Link>
        </div>
      </div>
    </header>
  );
}



function HomepageExplainer() {
  const {siteConfig} = useDocusaurusContext();
  return (
<div className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p>Overleaf enables teams of students and researchers to write papers simultaneously, from anywhere, in an easy-to-use, collaborative online LaTeX editor. Overleaf supports a variety of packages, including BibTeX, where you can manage your references.

When you connect Overleaf to CiteDrive, you can automatically synchronize your project and BibTeX-database with Overleaf.

With CiteDrive, easily collaborate on a project across global reach. Use our browser extension when you discover a paper you want to use, add it to your project with one click. You or anyone on your team can organize and cluster, annotate and evaluate your material in a concise dashboard.
Write faster at Overleaf: Insert in-text citations generated with CiteDrive. Since CiteDrive natively supports BibTeX, all changes are then automatically synced at Overleaf. You no longer need to upload and change references manually. </p>
      </div>
  </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <HomepageExplainer />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
