import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function rederExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item} />;
}
function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            renderItem={rederExpenseItem}
            keyExtractor={(item) => {
                return item.id;
            }}
        />
    );
}

export default ExpensesList;
