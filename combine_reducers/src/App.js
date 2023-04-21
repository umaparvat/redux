import React from 'react';
import {createStore, combineReducers} from 'redux';

//actions
const addItem = (name, price) => {
  return {
    type: 'ADD_ITEM',
    item: {
      name: name,
      price: price
    }
  }
}

const deleteItem = (index) => {
  return {
    type: "DELETE_ITEM",
    index: index
  }

}

const setDiscount = discount => {
  return {
    type: "SET_DISCOUNT",
    discount: discount
  }
}

const setFilter = filter => {
  return {
    type: "SET_FILTER",
    filter: filter
  }
}

var initialState = {
  items: [],
  filter: "none",
  discount: 0
}

//reducers
const items = (state=[], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'DELETE_ITEM':
      return [...state.slice(0, action.index), ...state.slice(action.index+1)];
    default:
      return state;
  }
}

const filters = (state= "none", action)=>{
  switch(action.type){
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

const discounts = (state=0, action)=>{
  switch(action.type){
    case 'SET_DISCOUNT':
        return action.discount;
    default:
      return state;
  }
}

// const gaintReducers = (state= initialState, action) => {
//   return {
//     items: items(state.items, action),
//     filter: filters(state.filter, action),
//     discount: discounts(state.discount, action)

//   }
// }

// var store = createStore(gaintReducers);

const reducers = combineReducers({items, filters, discounts});
var store = createStore(reducers)



console.log(store.dispatch(addItem("carrot", 3)));
console.log(store.dispatch(addItem("apple", 1)));
console.log(store.dispatch(addItem("banana", 2)));
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