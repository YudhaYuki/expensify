import { createStore, combineReducers } from 'redux';

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