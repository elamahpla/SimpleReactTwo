import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../Components/Header/Header';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage/ExpenseDashboardPage';
import AddExpensePage from '../Components/AddExpensePage/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage/EditExpensePage';
import HelpPage from '../Components/HelpPage/HelpPage';
import NotFoundPage from '../Components/NotFound/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={ExpenseDashboardPage} />
          <Route path="/create" component={AddExpensePage}/>
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;