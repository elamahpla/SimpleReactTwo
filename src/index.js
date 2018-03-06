import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Components/Test';
import './Styles/styles.scss';

ReactDOM.render(<Test />, document.getElementById('app'));

module.hot.accept();