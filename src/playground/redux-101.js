import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {

    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        }
    } else {
        return state;
    }
});

console.log(store.getState());


// Actions - That an object that gets sent to the store
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});
// I'd like to increment the count


// I'd like to reset the count to zero


console.log(store.getState());