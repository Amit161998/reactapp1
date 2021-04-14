import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const expense = props.expenses
    console.log(expense);

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filterExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    let expenseContent = <p>No Expenses Found</p>;
    if (filterExpenses.length > 0) {
        expenseContent = filterExpenses.map((expense) => {
            return (
                <ExpenseItem
                    title={expense.title}
                    key={expense.id}
                    amount={expense.amount}
                    date={expense.date}>
                </ExpenseItem>
            )
        })
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
                {expenseContent}
                {/* <ExpenseItem
                    title={expense[0].title}
                    key={expense[0].id}
                    amount={expense[0].amount}
                    date={expense[0].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={expense[1].title}
                    key={expense[1].id}
                    amount={expense[1].amount}
                    date={expense[1].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={expense[2].title}
                    key={expense[2].id}
                    amount={expense[2].amount}
                    date={expense[2].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={expense[3].title}
                    key={expense[3].id}
                    amount={expense[3].amount}
                    date={expense[3].date}>
                </ExpenseItem> */}
            </Card>
        </div>

    )
}

export default Expense;