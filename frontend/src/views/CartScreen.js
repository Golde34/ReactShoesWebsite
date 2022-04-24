import './css/cartScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/subComponents/MessageBox';


export default function CartScreen() {
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const productId = id;
    const qty = searchParams.get('qty');
    const idSize = searchParams.get('idsize');
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty, idSize));
        }
    }, [dispatch, productId, qty, idSize]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    const checkoutHandler = () => {
        navigate('/shipping');
    };
    function convertToPrice(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="cart">
            <div  >
                <br />
                <h2>Your cart</h2>
                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <div className="messagebox">
                            <MessageBox > <div className="message-empty">Your cart is empty. </div>
                                <div className="message-empty">
                                    <Link to="/">Back to Home Screen</Link>
                                </div>
                            </MessageBox>
                        </div>
                    </div>)
                    : (
                        <div>
                            <div className="contain">
                                <div className="container-table">
                                    <div className="wrap-table">
                                        <br />

                                        <table className="cart-table">
                                            <thead className="cart-head">
                                                <tr>
                                                    {/* <th className="column1"><input type="checkbox"/></th> */}
                                                    <th className="column2">Image</th>
                                                    <th className="column3">Product Name</th>
                                                    <th className="column4">Size</th>
                                                    <th className="column5">Price</th>
                                                    <th className="column6">Amount</th>
                                                    <th className="column7">Subtotal</th>
                                                    <th className="column8"></th>
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody className="cart-items">
                                                {cartItems.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="column2">
                                                            <Link to={`/product/${item.product}`}>
                                                                <img src={item.image} alt={item.name} className="small"></img>
                                                            </Link>
                                                        </td>

                                                        <td className="column3">
                                                            <Link to={`/product/${item.product}`} style={{ color: 'black' }}>
                                                                <span className="item-attribute-name">{item.name}</span>
                                                            </Link>
                                                        </td>

                                                        <td className="column4">
                                                            <span className="item-attribute-name">{item.size}</span>
                                                        </td>

                                                         <td className="column5">
                                                            <span className="item-attribute">{convertToPrice(item.price)}₫ </span>
                                                        </td>

                                                        <td className="column6">
                                                            <select className="item-quantity"
                                                                value={item.qty}
                                                                onChange={(e) =>
                                                                    dispatch(
                                                                        addToCart(item.product, Number(e.target.value), idSize)
                                                                    )
                                                                } >
                                                                { [...Array(item.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))  }
                                                            </select>
                                                        </td>

                                                        <td className="column7">
                                                            {convertToPrice(cartItems.reduce((a, c) => a + c.price * c.qty, 0))} ₫
                                                        </td>

                                                        <td className="column8">
                                                            <button
                                                                className="remove-item"
                                                                type="button"
                                                                onClick={() => removeFromCartHandler(item.product)}>
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>

                            <div className="checkout ">
                                <span className="total-price">
                                    Subtotal of all Products ({cartItems.reduce((a, c) => a + c.qty, 0)} Products) : &nbsp;
                                    <span className="money">
                                        {convertToPrice(cartItems.reduce((a, c) => a + c.price * c.qty, 0))}₫
                                    </span>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                </span>

                                <button
                                    type="button"
                                    id="button-checkout"
                                    onClick={checkoutHandler}
                                    className="chot-don"
                                    disabled={cartItems.length === 0} >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}