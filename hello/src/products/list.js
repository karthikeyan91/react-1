import React, {Component} from 'react';
import Product from './items';


class list extends React.Component {
    states = {
        itemInfo: [
            {
                name: 'Cadbury',
                description: 'Cadbury Some small description goes here',
                review: 142,
                order: 27,
                price: 124
            },
            {
                name: 'Raisin Chocolate',
                description: 'Raisin Chocolate small description goes here',
                review: 542,
                order: 237,
                price: 564
            },
            {
                name: 'Cookies',
                description: 'Cookies Some small description goes here',
                review: 7142,
                order: 57,
                price: 904
            },
            {
                name: 'Tuti frooti',
                description: 'Tuti frooti Some small description goes here',
                review: 457,
                order: 95,
                price: 247
            }
        ]
    } 
render() {
      return (
            <div className="container">
                <div className="row">
                    <Product 
                    name={this.states.itemInfo[0].name} 
                    description={this.states.itemInfo[0].description} 
                    review={this.states.itemInfo[0].review} 
                    orders={this.states.itemInfo[0].order} 
                    price={this.states.itemInfo[0].price} /> 

                    <Product 
                    name={this.states.itemInfo[1].name} 
                    description={this.states.itemInfo[1].description} 
                    review={this.states.itemInfo[1].review} 
                    orders={this.states.itemInfo[1].order} 
                    price={this.states.itemInfo[1].price} /> 

                    <Product 
                    name={this.states.itemInfo[2].name} 
                    description={this.states.itemInfo[2].description} 
                    review={this.states.itemInfo[2].review} 
                    orders={this.states.itemInfo[2].order} 
                    price={this.states.itemInfo[2].price} /> 

                    <Product 
                    name={this.states.itemInfo[3].name} 
                    description={this.states.itemInfo[3].description} 
                    review={this.states.itemInfo[3].review} 
                    orders={this.states.itemInfo[3].order} 
                    price={this.states.itemInfo[3].price} /> 
                </div> 
            </div>
        );
    }
}

export default list;
      