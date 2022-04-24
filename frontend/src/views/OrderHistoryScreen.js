import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listOrderMine } from "../actions/orderActions";
import LoadingBox from "../components/subComponents/LoadingBox";
import MessageBox from "../components/subComponents/MessageBox";
import "./css/OrderHistory.css";


export default function OrderHistoryScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const navigate = useNavigate();
    if (!userInfo) {
        navigate('/signin');
    }
    const orderMineList = useSelector((state) => state.orderMineList);
    const { loading, error, orders } = orderMineList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);

    function numberWithCommas(order) {
        const x = order.orderdetails.reduce((a, c) => a + c.quantityOrder * c.priceEach, 0);
        const price = x + parseInt(order.shippingPrice);
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="order-history">
            <h1 className="order-title">Order History</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <table className="table">
                    <thead className="h">
                        <tr>
                            <th>Order Id</th>
                            <th>Orderer</th>
                            <th>Order Day</th>
                            <th>Price</th>
                            <th>Shipping Date</th>
                            <th>Status</th>
                            <th>Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.idOrder}>
                                <td>{order.idOrder}</td>
                                <td>{order.customerName}</td>
                                <td>{order.orderDate.substring(0, 10)}</td>

                                <td>
                                    <span className="total-price">
                                        {numberWithCommas(order)} ₫
                                    </span>
                                </td>
                                <td>
                                    {order.shippedDate}
                                </td>
                                <td>
                                    {order.status}
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => {
                                            navigate(`/order/${order.idOrder}`);
                                        }} >
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}