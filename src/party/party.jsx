import React from 'react';
import styles from './party.module.css';

export function Party(props) {
  const userName = props.userName;

  return (
    <div className="party-main">
      <span className='player-name'> Your username: {userName} </span>
      <img className={styles.monke} src="monke.jpg" width={1600} alt="monke" />
    </div>
  );
}