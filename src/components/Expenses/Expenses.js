// import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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



    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                ></ExpenseFilter>
                <ExpensesChart expenses={filterExpenses}></ExpensesChart>
                <ExpensesList expenses={filterExpenses}></ExpensesList>
            </Card>
        </div>

    )
}

export default Expense;