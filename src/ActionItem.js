import React from 'react';
import styles from './App.css';

const ActionItem = (props) => {
    return (
        <div className={styles.actionItem}>
            {props.name}
            {props.children}
        </div> 
    )
}
export default ActionItem;