import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShoppingList } from './stores/ShoppingList';

const shoppingListStore = new ShoppingList();

ReactDOM.render(
  <React.StrictMode>
    <App store={shoppingListStore} />
  </React.StrictMode>,
  document.getElementById('root')
);
