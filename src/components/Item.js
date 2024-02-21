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
    const { item } = this.props;
    return (
      <div className={item.completed ? "crossed" : null}>
        <input 
          type="checkbox"
          onClick={this.checkItem} 
          value={item.name}
        />
        {item.name} - {item.location}
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>
    );
  }
}

export default observer(Item)
