import React from 'react';

class product extends React.Component {
    render() {
          return (
                <div className="col-md-4">
                    <figure className="card card-product p-2">
                        <figcaption className="info-wrap">
                                <h4 className="title">{this.props.name}</h4>
                                <p className="desc">{this.props.description}</p>
                                <div className="rating-wrap">
                                    <div className="label-rating">{this.props.review} reviews</div>
                                    <div className="label-rating">{this.props.orders} orders</div>
                                </div> 
                        </figcaption>
                        <div className="bottom-wrap">
                            <button onClick={function() { alert('Dummy Click'); }} className="btn btn-sm btn-primary float-right">Order Now</button>	
                            <div className="price-wrap h5">
                                <span className="price-new">${this.props.price}</span>
                            </div> 
                        </div> 
                    </figure>
                </div>
            );
        }
    }

export default product;