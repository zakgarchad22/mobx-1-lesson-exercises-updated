import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }

  editItem = () => {
    const newLocation = prompt("Please enter the new location:", this.props.item.location)
    if (newLocation) {
      this.props.store.editItem(this.props.item.name, newLocation)
      this.forceUpdate()
    }
  }

  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }

  render() {
    const { item } = this.props
    return (
      <li className={`collection-item avatar ${item.completed ? "crossed" : ""}`}>
        <i className="material-icons circle">assignment</i>
        <span className="title">{item.name}</span>
        <p>{item.location}</p>
        <div className="secondary-content">
          <input type="checkbox" id={`check-${item.id}`} onClick={this.checkItem} checked={item.completed} />
          <label htmlFor={`check-${item.id}`}></label>
          <button className="btn-small waves-effect waves-light" onClick={this.editItem}>
            <i className="material-icons">edit</i>
          </button>
          <button className="btn-small red waves-effect waves-light" onClick={this.deleteItem}>
            <i className="material-icons">delete</i>
          </button>
        </div>
      </li>
    )
  }
}

export default observer(Item)
