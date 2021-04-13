import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expense =(props) => {
    const expense = props.expenses
    console.log(expense);
    return (
        <Card className="expenses">
            <ExpenseItem
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
            </ExpenseItem>
        </Card>

    )
}

export default Expense;