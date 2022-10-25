import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../UI/Button";
function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button
                    mode="flat"
                    onPress={cancelHandler}
                    style={styles.buttonStyle}
                >
                    Cancel
                </Button>
                <Button onPress={confirmHandler} style={styles.buttonStyle}>
                    {isEditing ? "Update" : "Add"}
                </Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonStyle: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});
