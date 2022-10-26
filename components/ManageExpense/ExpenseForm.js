import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../../UI/Button";
import { getFormattedDate } from "../../util/date";
function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : "",
        date: defaultValues ? getFormattedDate(defaultValues.date) : "",
        description: defaultValues ? defaultValues.description : "",
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue,
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description,
        };
        onSubmit(expenseData);
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: inputChangeHandler.bind(this, "amount"),
                        value: inputValues.amount,
                    }}
                    style={styles.rowInput}
                />
                <Input
                    label="Date"
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, "date"),
                        value: inputValues.date,
                    }}
                    style={styles.rowInput}
                />
            </View>
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    // autoCorrect:false
                    onChangeText: inputChangeHandler.bind(this, "description"),
                    value: inputValues.description,
                }}
            />

            <View style={styles.buttons}>
                <Button
                    mode="flat"
                    onPress={onCancel}
                    style={styles.buttonStyle}
                >
                    Cancel
                </Button>
                <Button onPress={submitHandler} style={styles.buttonStyle}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontWeight: "bold",
        color: "white",
        fontSize: 24,
        marginVertical: 24,
        textAlign: "center",
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowInput: {
        flex: 1,
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
