import React from 'react';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.page}>
      <div className={styles.bg} />
      <div className={styles.grid} />

      <div className={styles.container}>
        <div className={styles.badge}>🚧 Under Construction</div>

        <h1 className={styles.title}>Cortexium Labs</h1>

        <p className={styles.subtitle}>
          We’re building AI-powered systems that help companies move faster,
          think smarter, and build better software.
        </p>

        <div className={styles.loader}>
          <div className={styles.core}></div>
          <div className={styles.orbit}></div>
          <div className={`${styles.orbit} ${styles.delay}`}></div>
        </div>

        <div className={styles.status}>Launching soon...</div>
      </div>

      <footer className={styles.footer}>© 2026 Cortexium Labs</footer>
    </div>
  );
}