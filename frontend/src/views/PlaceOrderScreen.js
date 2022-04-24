import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSteps from '../components/subComponents/CheckoutSteps';
import LoadingBox from '../components/subComponents/LoadingBox';
import MessageBox from '../components/subComponents/MessageBox';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import "bootstrap/dist/css/bootstrap.min.css";


export default function PlaceOrderScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    console.log(userInfo);
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    if (!cart.paymentMethod) {
        navigate("/payment");
    }
    if (!userInfo) {
        navigate("/signin");
    }
    const orderCreate = useSelector((state) => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const toPrice = (num) => Number(num.toFixed(2)); //4.123 => "4.12" => 4.12

    //Cart dispatch handler
    const shippedDateConstant = 5;
    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    cart.shippingPrice = cart.itemsPrice > 100 ? 20000 : toPrice(0);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
    const today = new Date();
    cart.orderDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    today.setDate(today.getDate() + shippedDateConstant);
    cart.shippedDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    cart.status = "Processing...";
    cart.shipAddress = cart.shippingAddress.address + " " +
        cart.shippingAddress.ward + " " +
        cart.shippingAddress.district + " " +
        cart.shippingAddress.city;
    cart.customerName = cart.shippingAddress.fullName;
    cart.phoneNumber = cart.shippingAddress.phoneNumber;
    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
        navigate("/signin");
    }

    useEffect(() => {
        if (success) {
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [dispatch, order, success]);

    function convertToPrice(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="order-detail row top">
                <div className=" col-md-6 ">
                    <div className="card card-body">
                        <h2>Shipping Address</h2>
                        <p>
                            <strong>Full name: </strong> {cart.shippingAddress.fullName} <br />
                            <strong>Phone number: </strong>{" "}
                            {cart.shippingAddress.phoneNumber} <br />
                            <strong>Address: </strong>{cart.shippingAddress.address},{" "}
                            {cart.shippingAddress.ward},{" "}{cart.shippingAddress.district},{" "}
                            {cart.shippingAddress.city}
                        </p>
                    </div>
                    <div className="card card-body">
                        <h2>Payment</h2>
                        <p>
                            <strong>Payment method:</strong> {cart.paymentMethod}
                        </p>
                    </div>
                    <div className="card card-body">
                        <h2>product</h2>
                        {cart.cartItems.map((item) => (
                            <>
                                <div className="card card-body">
                                    <div className={`row orderItem ${item.product}`}>
                                        <div className="col-md-6">
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="small1"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="min-30">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>

                                            <div>
                                                {item.qty} x ${convertToPrice(item.price)} = ${convertToPrice(item.qty * item.price)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-body">
                        <div className="Row">
                            <h2>Product Details</h2>
                            <div className="Row">
                                <div><p>Price: {convertToPrice(cart.itemsPrice)}₫</p></div>
                            </div>
                            <div className="Row">
                                <div><p>Shipping Price: {convertToPrice(cart.shippingPrice)}₫ </p></div>
                            </div>
                            <div className="roww">
                                <div>
                                    <strong>Total Price: {convertToPrice(cart.totalPrice)}₫</strong>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btnn btn-warning "
                                disabled={cart.cartItems.length === 0}
                                onClick={placeOrderHandler}
                            >
                                Confirm
                            </button>
                            {loading && <LoadingBox></LoadingBox>}
                            {error && <MessageBox variant="danger">{error}</MessageBox>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}