import React, {Component} from 'react';


function sortinglist() {debugger;
    const data=this;
    this.acending = !this.acending;
       
     return data.sort(function(a, b) {debugger;
         
          if (a < b ) {
             return (data.acending  ? -1 : 1);
          }
          if (a > b ) {
            return (data.acending  ? 1 : -1);
          }

        return 0;

    });
   
    
}



export class PizzaItems extends Component {
    constructor(props) {
        super(props);
        this.state={
          rghPizzaList: props.pizza,
            pizzaList: props.pizza
            
        }
       
    }

    

    sortList() {
        this.state.pizzaList.sortinglist = sortinglist;
        this.setState({pizzaList: this.state.pizzaList.sortinglist()});

    }
    
    handleChange(ev) {
        this.state.pizzaList = this.state.rghPizzaList;
        
         function renderChange(pizzaList, ev) {
                return pizzaList.filter(function (data) {
                    return data.includes(ev.target.value);
                });
            }       
        const updateList = renderChange(this.state.pizzaList, ev);
        this.setState({pizzaList: updateList});
    }


    render() {
                    
        return (
            <div>
                <div className="col-md-12 inputcontainer">
                    <div className="col-md-offset-1 col-sm-4">
                        <input
                            type="text"
                            placeholder="Filter List Items"
                            className="form-control"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="col-sm-4">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.sortList.bind(this)}>
                            sort Accen/Decen order
                        </button>
                    </div>
                </div>
                <div className="panel-body">
                    <ul className="col-md-offset-1 col-md-6 listItem">
                        {
                            this.state.pizzaList.map(function(data, index) {
                                return (<li className="list-group-item" key={index}>{data}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
