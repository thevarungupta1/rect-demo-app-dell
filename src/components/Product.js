import React from "react";

const Product = (props) => {
  const { productName, image, price, mrp } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={ 'http://rjtmobile.com/grocery/images/'+image } width="50" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{ productName }</h5>
          <p className="card-text">
           
          </p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
