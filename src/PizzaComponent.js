import React, {Component} from 'react';


import {PizzaItems} from './components/PizzaItems';


import {fetch} from './services/fetch';

function fetchListItem() {
    return fetch()
        .then(function (response) {
            self.setState({pizzaList: response.pizzas, isLoading: !(response.pizzas.length)});
        });
}


export class PizzaComponent extends Component {
    constructor() {
        super();
        this.state = {
            pizzaList: [],
            isLoading: true
        };
    }

    componentDidMount() {
        self = this;
        global.setTimeout(
            function(){
                fetchListItem();
            },
            2000
        );
    }

    render() {
        const isLoading = this.state.isLoading;
       
        return (
          <div className="container panel panel-default heightcont">
              <div className="panel-body">
                  {
                      isLoading ?
                          <h3>Loading...</h3> :
                          <PizzaItems pizza={this.state.pizzaList}/>
                  }
              </div>
              
          </div>
        );
    }
}
