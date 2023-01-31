import React from 'react';
import "./ExpenseItem.css";

function ExpenceItem() {
    return (
        <div className="expense-item">
        <div>August 8 2022</div>
        <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$295</div>
        </div>
        </div>
    )
}

export default ExpenceItem;