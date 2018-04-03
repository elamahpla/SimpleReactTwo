import React from 'react'
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseListFilters from '../ExpenseList/ExpenseListFilters/ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;