import { FlatList, Text } from "react-native";

function rederExpenseItem(itemData) {
    return <Text>{itemData.item.description}</Text>;
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
