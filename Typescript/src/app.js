"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpenseManager_1 = require("./ExpenseManager");
var expenseManager = new ExpenseManager_1.ExpenseManager();
document.addEventListener('DOMContentLoaded', function ValorCalculadora() {
    document.getElementById('expense-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('expense-name');
        var nameInput = name.value;
        var amount = document.getElementById('expense-amount');
        var amountInput = Number(amount.value);
        var category = document.getElementById('expense-category');
        var categoryInput = category.value;
        if (nameInput !== '' && amountInput > 0 && categoryInput !== '') {
            expenseManager.addExpense({ name: nameInput, amount: amountInput, category: categoryInput });
            updateUI();
        }
        else {
            // Optionally, handle error state (e.g., display an error message)
            console.error("All fields must be filled correctly");
        }
    });
    function updateUI() {
        var expenses = expenseManager.getExpenses();
        var expensesList = document.querySelector('expense-list-items');
        expensesList.innerHTML = '';
        expenses.forEach(function (expense) {
            var li = document.createElement('li');
            li.textContent = "".concat(expense.name, " - $").concat(expense.amount, " - ").concat(expense.category);
            expensesList.appendChild(li);
        });
    }
});
