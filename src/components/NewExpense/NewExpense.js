
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [formState, setFormState] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        console.log(expenseData)
        props.onAddExpense(expenseData)
    }


    const startEditing = () => {
        setFormState(true);
    }

    const stopEditing = () => {
        setFormState(false);
    }

    return (
        <div className="new-expense">
            {!formState && <button onClick={startEditing}>Add New Expense</button>}
            {formState && <ExpenseForm onCancel={stopEditing} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense;
