import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import {PizzaComponent} from './src/PizzaComponent'

import './src/style/style.css'

ReactDOM.render(<PizzaComponent />, document.querySelector('.content'));
