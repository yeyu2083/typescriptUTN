"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseManager = void 0;
var ExpenseManager = /** @class */ (function () {
    function ExpenseManager() {
        this.expenses = [];
        this.loadExpenses();
    }
    ExpenseManager.prototype.loadExpenses = function () {
        var data = localStorage.getItem('expenses');
        try {
            this.expenses = data ? JSON.parse(data) : [];
        }
        catch (e) {
            console.error('Error al cargar los gastos:', e);
            this.expenses = [];
        }
    };
    ExpenseManager.prototype.addExpense = function (expense) {
        this.expenses.push(expense);
        this.saveExpenses();
    };
    ExpenseManager.prototype.getExpenses = function () {
        return this.expenses;
    };
    ExpenseManager.prototype.saveExpenses = function () {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    };
    ExpenseManager.prototype.getTotalExpenses = function () {
        return this.expenses.reduce(function (total, expense) { return total + expense.amount; }, 0);
    };
    ExpenseManager.prototype.filterExpensesByCategory = function (category) {
        return this.expenses.filter(function (expense) { return expense.category === category; });
    };
    return ExpenseManager;
}());
exports.ExpenseManager = ExpenseManager;
