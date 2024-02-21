import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
import 'materialize-css/dist/css/materialize.min.css';



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
      <div className="App container">
        <h3 className="center-align">Reservations</h3>
        <div className="input-field">
          <input id="item_name" type="text" onChange={this.handleChange} value={this.state.newItem} />
          <label htmlFor="item_name">New Item</label>
        </div>
        <button className="btn waves-effect waves-light" onClick={this.addItem}>Add
          <i className="material-icons right">add</i>
        </button>
        <ul className="collection">
          {this.props.store.list.map((i, ind) => (
            <Item item={i} key={ind} store={this.props.store} />
          ))}
        </ul>
      </div>
    )
  }
}

export default observer(App);
