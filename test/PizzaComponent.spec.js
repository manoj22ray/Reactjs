import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {PizzaComponent} from '../src/PizzaComponent';


import {PizzaItems} from '../src/components/PizzaItems';


describe('<PizzaComponent /> Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<PizzaComponent/>);
    });

    it('should have Class panel', () => {
        expect(renderedElement.props().className).to.equal('container panel panel-default');
    });

    describe('Child Elements', () => {
        it('should have child elements', function () {
           expect(renderedElement.props().children[1].type).to.equal('div');
           
            
        });

        

        describe('when app is loaded', function () {
            it('should show "Loading..."', () => {
                renderedElement.setState({isLoading: false});
                expect(renderedElement.props().children[1].props.children.props.children).to.equal(PizzaItems);
            });
            it('should set pizza list', () => {
                const pizzaList = ['pizza'];
                renderedElement.setState({isLoading: false});
                renderedElement.setState({pizzaList: pizzaList});
                expect(renderedElement.props().children[1].props.children.props.pizza).to.equal(pizzaList);
            });
        });
    });
});
