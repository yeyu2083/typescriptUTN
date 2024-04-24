import { ExpenseManager } from "./ExpenseManager";

//nueva instancia del page object model
const expenseManager = new ExpenseManager();

//extraigo los valores de los input
document.addEventListener('DOMContentLoaded', function ValorCalculadora() {

document.getElementById('expense-form')!.addEventListener('submit', (event) => {
    event.preventDefault();
 
        const name = (document.getElementById('expense-name') as HTMLInputElement)
        const nameInput: string = name.value;
        const amount = (document.getElementById('expense-amount') as HTMLInputElement)
        const amountInput: number = Number(amount.value);
        const category = (document.getElementById('expense-category') as HTMLSelectElement)
        const categoryInput : string = category.value;

        if (nameInput !== '' && amountInput > 0 && categoryInput !== '') {
            expenseManager.addExpense({ name: nameInput, amount: amountInput, category: categoryInput });
            updateUI();
        } else {
            // Optionally, handle error state (e.g., display an error message)
            console.error("All fields must be filled correctly");
        }
    });

    //actualizo la UI con los datos de los input
function updateUI() {
    const expenses = expenseManager.getExpenses(); 
    const expensesList = document.querySelector('expense-list-items') as HTMLElement;
    expensesList.innerHTML = '';
     expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.name} - $${expense.amount} - ${expense.category}`;
        expensesList.appendChild(li);
    });

}})
