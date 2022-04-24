import React, { useEffect, useState } from 'react';
import './css/productScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/subComponents/LoadingBox';
import MessageBox from '../components/subComponents/MessageBox';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../actions/cartActions';


export default function ProductScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const productId = id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(0);

    const incNum = () => {
        if (qty < product.productsizes[size].quantityInStock) {
            setQty(qty + 1);
        } else {
            setQty(product.productsizes[size].quantityInStock);
        }
    };
    const decNum = () => {
        if (qty > 1) {
            setQty(qty - 1);
        } else {
            setQty(1);
        }
    };

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId, size]);

    const addToCartHandler = () => {
        dispatch(addToCart(productId, qty, size));
        navigate(`/cart/${productId}?qty=${qty}&idsize=${size}`);
    };

    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div>
                    <div className='row-product'>
                        <div className="product-detail-left product-images col-xs-12 col-sm-5 col-md-5 col-lg-5">
                            <img className="medium" src={product.productdetails[0].image} alt={product.productName} />
                            <br></br>
                            <div>
                                {
                                    product.productsizes.length === 0 ? (
                                        <span className='productStatus'> Status: Out of stock</span>
                                    ) : product.productsizes[size].quantityInStock > 0 ? (
                                        <span className='productStatus'> Status: Stocking </span>
                                    ) : (
                                        <span className='productStatus'> Status: Out of stock</span>
                                    )
                                }
                            </div>

                            <div className='price-box'>
                                <span className='productPrice'> {numberWithCommas(product.productPrice)} ₫ </span>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 details-pro'>
                            <h1 className='titleName'>{product.productName}</h1>
                            <hr></hr>

                            <div className="product-des">
                                <span> {product.productDescription} </span>
                            </div>
                            <br></br>
                            <div className="product-policy">
                                <div className="product-policy-content">
                                    <FontAwesomeIcon icon={faCheckCircle} className="d-inline-block icon" />
                                    <p className="d-inline-block"> &nbsp; Freeship for orders from 2,000,000 VND</p>
                                </div>
                                <div className="product-policy-content">
                                    <FontAwesomeIcon icon={faCheckCircle} className="d-inline-block icon" />
                                    <p className="d-inline-block"> &nbsp; Genuine 1 month warranty on shoes</p>
                                </div>
                                <div className="product-policy-content">
                                    <FontAwesomeIcon icon={faCheckCircle} className="d-inline-block icon" />
                                    <p className="d-inline-block"> &nbsp; Freeship for orders from 600k (maximum 30k)</p>
                                </div>
                                <br></br>
                                <div>
                                    Size: &nbsp;
                                    <select className="item-sizes" value={size} onChange={(e) => setSize(e.target.value)}>
                                        {product.productsizes.map((x) => (
                                            <option key={x.idSize} value={x.idSize - 1}>
                                                {x.productSize}
                                            </option>
                                        )
                                        )}
                                    </select>
                                </div>
                                <div>
                                    {
                                        product.productsizes.length === 0 ? (
                                            <div>Out of stock</div>
                                        ) : (
                                            <div className="quantity-button"> Amount: &nbsp;
                                                <button onClick={decNum} className="dec-Button">  <RemoveIcon />  </button>
                                                <input className="input" type="text" value={qty} onChange={e => setQty(e.target.value)} />
                                                <button onClick={incNum} className="inc-Button" > <AddIcon /> </button>
                                            </div>
                                        )
                                    }

                                    {
                                        product.productsizes.length === 0 ? (
                                            <button className="addtocart">Cannot add to cart</button>
                                        ) : product.productsizes[size].quantityInStock > 0 ? (
                                            <button onClick={addToCartHandler} className="addtocart">
                                                Add to cart
                                            </button>
                                        ) : (
                                            <button className="x-cart">
                                                Cannot add to cart
                                            </button>
                                        )
                                    }
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )};
        </div>
    )
}