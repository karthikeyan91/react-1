import React from 'react';

class list extends React.Component {
switchHandler = () => {
    console.log('clicked');
}   
render() {
      return (
            <div className="container">
            <div className="row">
            <div className="col-md-4">
                <figure className="card card-product p-2">
                    <figcaption className="info-wrap">
                            <h4 className="title">Item 1</h4>
                            <p className="desc">Some small description goes here</p>
                            <div className="rating-wrap">
                                <div className="label-rating">132 reviews</div>
                                <div className="label-rating">154 orders </div>
                            </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <button onClick={this.switchHandler} className="btn btn-sm btn-primary float-right">Order Now</button>	
                        <div className="price-wrap h5">
                            <span className="price-new">$1280</span>
                        </div> 
                    </div> 
                </figure>
            </div> 
            <div className="col-md-4">
                <figure className="card card-product p-2">
                    <figcaption className="info-wrap">
                            <h4 className="title">Item 2</h4>
                            <p className="desc">Some small description goes here</p>
                            <div className="rating-wrap">
                                <div className="label-rating">132 reviews</div>
                                <div className="label-rating">154 orders </div>
                            </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                            <a href="" className="btn btn-sm btn-primary float-right">Order Now</a>	
                            <div className="price-wrap h5">
                                <span className="price-new">$1280</span>
                            </div> 
                    </div> 
                </figure>
            </div> 
            <div className="col-md-4">
                <figure className="card card-product p-2">
                    <figcaption className="info-wrap">
                            <h4 className="title">Item 3</h4>
                            <p className="desc">Some small description goes here</p>
                            <div className="rating-wrap">
                                <div className="label-rating">132 reviews</div>
                                <div className="label-rating">154 orders </div>
                            </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                            <a href="" className="btn btn-sm btn-primary float-right">Order Now</a>	
                            <div className="price-wrap h5">
                                <span className="price-new">$1280</span>
                            </div> 
                    </div> 
                </figure>
            </div> 
            </div> 
            </div>
        );
    }
}

export default list;
      