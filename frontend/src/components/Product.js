import React from 'react';
import {Link} from 'react-router-dom';
import "./css/product.css";
import { useDispatch, useSelector } from 'react-redux';


export default function Product(props) {
    const dispatch = useDispatch();
    const { product} = props;
    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <div key={product.idProduct} className="product">
        <div>
          <Link to={`/product/${product.idProduct}`}>
            <img className='image' src={product.productdetails[0].image}/>
          </Link>
        </div>
        <div className='product__info'>
          <Link to={`/product/${product.idProduct}`} style={{textDecoration: 'none'}}>
            <p style={{color: 'black'}}>{product.productName}</p>
          </Link>
        </div>
        <div className='product__price'>
          <strong>{numberWithCommas(product.productPrice)}</strong>
        </div>
        <Link to={`/product/${product.idProduct}`} className="link">
          <button className='details'>Details</button>
        </Link>
      </div>
    )
}