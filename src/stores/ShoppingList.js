/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        // your code here
        makeObservable(this, {
            list: observable,
            checkItem: action,
            addItem: action,
            editItem: action,
            deleteItem: action,
        })
        
    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    addItem = (name) => {
        const newItem = new Item(name)
        this.list.push(newItem)
    }
    editItem = (name, newLocation) => {
        const item = this.list.find(i => i.name === name)
        if (item) {
            item.location = newLocation
        }
    }
    
    deleteItem = (name) => {
        const index = this.list.findIndex(i => i.name === name)
        if (index > -1) {
            this.list.splice(index, 1)
        }
    }
    
}

