import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

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
        date: new Date("2022-9-23"),
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
        date: new Date("2022-11-25"),
    },
];
function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary
                expenses={DUMMY_EXPENSES}
                periodName={expensesPeriod}
            />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
});
