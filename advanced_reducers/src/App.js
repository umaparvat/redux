import React from 'react';
import {createStore, combineReducers} from 'redux';

const ADD_ITEM = "ADD_ITEM";

const addItem = (name, price) => {

  return {
    type: ADD_ITEM,
    item: {
      name: name,
      price: price
    }
  }
  
}

const deleteItem = (index)=> {
  return {
    type: "DELETE_ITEM",
    index: index
  }
}

const setFilter = (filter) => {
  return {
    type: "FILTER",
    filter: filter
  }
}

const setDiscount = (discount)=> {
  return {
    type: "SET_DISCOUNT",
    discount: discount

  }
}

var intialState = {
  items: [],
  filter: "none",
  discount: 0

}

const gaintReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {items: [...state.items, action.item]})
    case 'DELETE_ITEM':
      return Object.assign({}, state, {items: [...state.slice(0, action.index), ...state.slice(action.index+1)]} )
    case 'SET_FILTER':
      return Object.assign({}, state, {filter:action.filter})
    case 'SET_DISCOUNT':
      return Object.assign({}, state, {discount: action.discount})
  }
}
var store = createStore(gaintReducer);

console.log(store.dispatch(addItem("apple", 1)));
console.log(store.dispatch(addItem("banana", 2)));
console.log(store.dispatch(addItem("carrot", 3)));
console.log(store.dispatch(setFilter("alphabetical")));
console.log(store.dispatch(setDiscount(20)));

console.log(store.getState());

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;