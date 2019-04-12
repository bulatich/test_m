import React from 'react';
import styles from './App.css';
import ActionItem from './ActionItem';
import Button from './Button';
import ModuleWindow from './ModuleWindow';

class App extends React.Component {
  state = {
    open: false,
    windVal: ''
  };
  updateData = (value, id) => {
    this.setState({ open: value })
    if (id === 'hi_item')  this.setState({ windVal: 'Привет, как дела?' })
    else if (id === 'by_item') this.setState({ windVal: 'До встечи!' })
  }
  closeWindow = (value) => {
    this.setState({ open: value })
  }
  render() {
    return (
      <div className={styles.app}>
        <ActionItem name= 'Привет'>
        <Button updateData={this.updateData} id='hi_item' />
        </ActionItem>
        <ActionItem name= 'Пока'>
        <Button updateData={this.updateData} id='by_item' />
        </ActionItem>
        {this.state.open && <ModuleWindow closeWindow={this.closeWindow} name={this.state.windVal}/>}
      </div>
    )
  }
}

export default App;
