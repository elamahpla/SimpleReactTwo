import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT', 
  incrementBy: incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});
const resetCount = () => ({
  type: 'RESET'
});
const setCount = ({count}) => ({
  type: 'Set',
  count: count
});

const store = createStore((state = {count: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET': 
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default: 
      return state; 
  }
});