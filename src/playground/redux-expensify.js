import {createStore , combineReducers} from 'redux';
import uuid from "uuid";




// STORE CREATION - EXPENSES
const store = createStore(
    combineReducers({
    expenses : expensesReducer,
    filters : filtersReducer
}));

const getVisibilityExpenses = (expenses , {text, sortBy, startDate, endDate}) => {
    return  expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.created <= endDate;
        const textMatch =  expense.description.toLocaleLowerCase().includes(text.toLocaleLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a ,b) => {
        if(sortByDate === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else {
            return a.amount < b.amount ? 1 : -1;
        }
    })

}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibilityExpenses(state.expenses , state.filters);
        console.log(visibleExpenses); 
})


// 4- dispatch reducers
//ADD_EXPENSE
const expenseOne = store.dispatch(addExpense({description : 'Rent is very high!' ,amount : 100}));
const expenseTwo = store.dispatch(addExpense({description : 'coffee is very cheep!' ,amount : 300}));

// // REMOVE-EXPENSE
// store.dispatch(removeExpense({id: expenseOne.expense.id}));


// // EDIT-EXPENSE
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 800}));


// SET-TEXT-FILTER
// store.dispatch(setTextFilter('coffee'));


// // SORT-BY-AMOUNT
store.dispatch(sortByAmount('amount')); //amount


// // SORT-BY-DATE
store.dispatch(sortByDate('date')); //date


// //SET-START-DATE
// store.dispatch(setStartDate());
// store.dispatch(setStartDate('march'));


// //SET-END-DATE
// store.dispatch(setEndDate());






















// const demoState = {
//     expense: [{
        
//         description: 'January Rent',
//         note: 'this was the final payment for that address',
//         amount: 54500,
//         createdAt: 0,
//         id: uuid()  

//     }],
//     filters : {
//             text:'rent',
//             sortBy:'amount', //date or amount
//             startDate: undefined,
//             endDate: undefined

//     }
// }
