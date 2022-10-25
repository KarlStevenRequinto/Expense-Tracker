import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A PAIR OF SHOES",
        amount: 59.99,
        date: new Date("2021-12-19"),
    },
    {
        id: "e2",
        description: "A PAIR OF SOCKS",
        amount: 69.99,
        date: new Date("2022-10-19"),
    },
    {
        id: "e3",
        description: "A PAIR OF SHORTS",
        amount: 69.99,
        date: new Date("2021-10-12"),
    },
    {
        id: "e4",
        description: "A PAIR OF BRAINS",
        amount: 69.99,
        date: new Date("2022-09-23"),
    },
    {
        id: "e5",
        description: "A PAIR OF EARINGS",
        amount: 69.99,
        date: new Date("2022-10-23"),
    },
    {
        id: "e6",
        description: "A PAIR OF LUNGS",
        amount: 69.99,
        date: new Date("2021-12-01"),
    },
    {
        id: "e7",
        description: "A PAIR OF PEARS",
        amount: 69.99,
        date: new Date("2022-10-25"),
    },
    {
        id: "e8",
        description: "A PAIR OF HANDS",
        amount: 69.99,
        date: new Date("2022-10-21"),
    },
    {
        id: "e9",
        description: "A PAIR OF SOMETHING",
        amount: 69.99,
        date: new Date("2022-10-22"),
    },
    {
        id: "e10",
        description: "A PAIR OF SOME PAIRS",
        amount: 69.99,
        date: new Date("2022-10-22"),
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { description, amount, date }) => {},
});
function expensesReducer(state, action) {
    switch (action.type) {
        case "ADD":
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case "UPDATE":
            const updatableExpenseIndex = state.findIndex((expense) => {
                return expense.id === action.payload.id;
            });
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case "DELETE":
            return state.filter((expense) => {
                return expense.id !== action.payload;
            });
        default:
            return state;
    }
}
function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(
        expensesReducer,
        DUMMY_EXPENSES
    );

    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };
    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;
