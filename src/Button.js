import React from 'react';
import styles from './App.css';

export default class Button extends React.Component {
    state = {
        open: true
      };
    render() {
        return (
            <button
            id = {this.props.id}
            className={styles.button}
            onClick={() => {this.props.updateData(this.state.open, this.props.id)}}
            >Нажать</button>
        )
    }
}