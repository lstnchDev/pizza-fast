import React from 'react';
import Header from './components/header/Header';
import styles from './app.module.scss'
function App() {
  return (
    <div className={styles.app}>
        <Header />
    </div>
  );
}

export default App;
