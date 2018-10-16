import React from "react"
import { Button } from "reactstrap"
import { connect } from "react-redux"
import { remove_expense } from "../actions/expense-actions"
import visible_expenses from "../selectors/visibility-controller"


const get_locale = () => (
    (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en'
)

const ExpenseListItem = ({ expense, idx, dispatch }) => (
    <React.Fragment>
        <tr>
            <th scope="row">{idx}</th>
            <td>{expense.expense_name}</td>
            <td><strong>&#x20B9;</strong>{expense.amount}</td>
            <td>{expense.created_on.toLocaleString("en-IN")}</td>
            <td>{expense.description ? expense.description: <strong>-</strong>}</td>
            <td>
                <Button color="danger" className="btn-xs circle px-1" onClick={
                    () => dispatch(remove_expense(expense.eid))
                }>
                    <strong>&times;</strong>
                </Button>
            </td>
        </tr>
    </React.Fragment>
)

const map_state_to_props = (state) => {
    return {
        expenses: visible_expenses(state.expenses, state.filters)
    }
}

export default connect(map_state_to_props)(ExpenseListItem)