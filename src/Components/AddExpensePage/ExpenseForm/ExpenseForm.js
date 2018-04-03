import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount / 100).toString()  : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    };
  }
  descriptionChangeHandler = (event) => {
    const description = event.target.value;
    this.setState(() => ({description: description}));
  };
  noteChangeHandler = (event) => {
    const note = event.target.value;
    this.setState(() => ({note: note}));
  };
  amountChangedHandler = (event) => {
    const amount = event.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount: amount}));
    }
  };
  onDateChangeHandler = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({createdAt: createdAt}));
    }
  }
  focusChangeHandler = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}));
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please provide description & amount'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitHandler}>
          <input 
            placeholder="Description"
            autoFocus
            type="text"
            value={this.state.description}
            onChange={this.descriptionChangeHandler}
          />
          <input
            value={this.state.amount}
            onChange={this.amountChangedHandler}
            type="number"
            placeholder="Amount"
          /><br />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChangeHandler}
            focused={this.state.calendarFocused}
            onFocusChange={this.focusChangeHandler}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          /><br /><br />
          <textarea
            value={this.state.not}
            onChange={this.noteChangeHandler}
            placeholder="Add a note for your expense (optional)"
          >
          </textarea><br/>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
};

export default ExpenseForm;