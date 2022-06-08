import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';


class App extends Component {
  constructor() {
    super()
    this.state = {
      newItem: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = () => {
    this.props.store.addItem(this.state.newItem)
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} value={this.state.newItem} />
        <button onClick={this.addItem}>Add</button>
        {/* your code here
          You should map each grocery item into an Item component
      */}
      </div>
    );
  }
}

export default observer(App);
