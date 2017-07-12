import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {PizzaItems} from '../../src/components/PizzaItems'

describe('<PizzaItems /> Component', () => {
    let renderedElement, testProps;

    beforeEach(() => {
        testProps = {
            pizza: ['pizza']
        };

        renderedElement = shallow(<PizzaItems {...testProps}/>);
    });

    it('should have pizza list', function () {
        expect(renderedElement.state('pizzaList')).to.equal(testProps.pizza);
    });

    describe('form controls', function () {
        let formElement;

        beforeEach(function () {
            formElement = renderedElement.props().children[0].props.children;
        });

        describe('filter items', function () {
            let filterElement;

            beforeEach(function () {
                filterElement = formElement[0].props.children;
            });

            it('should have input textbox', function () {
                expect(filterElement.type).to.equal('input');
            });


        });

        describe('sort items', function () {
            let sortElement;

            beforeEach(function () {
                sortElement = formElement[1].props.children;
            });

            it('should have sort button', function () {
                expect(sortElement.type).to.equal('button');
            });

            it('should sort items', function () {
                const sortList = ['pizza'];
                sortElement.props.onClick();

                expect(renderedElement.state('pizzaList')).to.equal(sortList);
            });
        });
    });
});
