import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    { 
        description ='', 
        note = '', 
        amount = 0, 
        createAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});


// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_ENS_DATE


// Creating a store that has two reducers associated with it
// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

// Filter reducer
// Text => '', sortBy => 'date', startDate => undefined, endDate => undefined;
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }) 
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 3 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

console.log(expenseOne);


const demoState = {
    expenses: [{
        id: '1111mjdie',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 12300,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Yudha',
    age: 27
};

console.log({
    age: 28,
    ...user,
    location: 'Philadelphia',
});