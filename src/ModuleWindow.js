import React from 'react';
import styles from './App.css';

class ModuleWindow extends React.Component {
    state = {
        open: false,
      };
    render() {
        return (
            <div className={styles.moduleWindow}>
            <div className={styles.quest}>
            <p>{this.props.name}</p>
            <button 
            className={styles.close}
            onClick={() => {this.props.closeWindow(this.state.open)}}>
            </button>    
            </div>
            </div>
          )
    }
}
export default ModuleWindow;