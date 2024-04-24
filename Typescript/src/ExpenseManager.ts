import { Expense } from "./interface";

//creo la clase e importo la interface
export class ExpenseManager {
    private expenses: Expense[] = [];

    constructor() {
        this.loadExpenses();
    }

    loadExpenses(): void {
        const data = localStorage.getItem('expenses');
        try {
            this.expenses =data ? JSON.parse(data)as Expense[] : [];
        } catch (e) {
            console.error('Error al cargar los gastos:', e);
            this.expenses = [];
        }
           
    }
    //agrego el gasto
    addExpense(expense: Expense) {
        this.expenses.push(expense);
        this.saveExpenses();
    }
    //tomo el gasto
    getExpenses() {
        return this.expenses;
    }
    //guardo el gasto
    saveExpenses(){
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }
    getTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
    filterExpensesByCategory(category: string) {
        return this.expenses.filter(expense => expense.category === category);
    }

}