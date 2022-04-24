import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/subComponents/LoadingBox';
import MessageBox from '../components/subComponents/MessageBox';


export default function OrderScreen() {
    const navigate = useNavigate();
    const { id } = useParams();
    const orderId = id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { loading, error, order } = orderDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    if (!userInfo) {
        navigate('/signin');
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]);

    function numberWithCommas(order) {
        const x = order.orderdetails.reduce((a, c) => a + c.quantityOrder * c.priceEach, 0);
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function priceOrder(order) {
        const x = order.orderdetails.reduce((a, c) => a + c.quantityOrder + c.priceEach, 0);
        return x;
    }
    function convertToPrice(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function sum(x, y) {
        const sum = x + y;
        return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div>
            {
                loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div>
                        <h1>Order {order.idOrder}</h1>
                        <div className="order-detail row top">
                            <div className="col-md-6 ">
                                <div className="card card-body">
                                    <h2>Shipping address</h2>
                                    <p>
                                        <strong>Name:</strong> {order.customerName} <br />
                                        <strong>Address: </strong> {order.address} <br />
                                        <strong>Order Date: </strong> {order.orderDate}
                                    </p>
                                </div>
                                <div className="card card-body">
                                    <h2>Payment</h2>
                                    <p>
                                        <strong>Payment Method:</strong> {order.paymentMethod}
                                    </p>
                                </div>
                                <div className="card card-body">
                                    <h2>Product</h2>
                                    {order.orderdetails.map((item) => (
                                        <div key={item.idProduct} className="card card-body">
                                            <div className={`row orderItem ${item.product}`}>
                                                <div className="col-md-6">
                                                    <div>
                                                        <img
                                                            src={item.product.productdetails[0].image}
                                                            alt={item.product.productName}
                                                            className="small1"
                                                        ></img>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="min-30">
                                                        <Link to={`/product/${item.idProduct}`}>
                                                            {item.product.productName}
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        {item.quantityOrder} x {convertToPrice(item.priceEach)}₫ = {convertToPrice(item.quantityOrder * item.priceEach)}₫
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card card-body">
                                    <div className="row">
                                        <h2>Order Details</h2>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div><p>Price: {numberWithCommas(order)}₫ </p></div>
                                            </div>
                                            <div className="row">
                                                <div><p>Shipping Price: {order.shippingPrice}₫ </p></div>

                                            </div>
                                            <div className="row">
                                                <div>
                                                    <strong> <p>Subtotal: {sum(parseInt(priceOrder(order)), parseInt(order.shippingPrice))} ₫</p></strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}