import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod, saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/subComponents/CheckoutSteps';
import './css/ShippingScreen.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ShippingScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const navigate = useNavigate();
    if (!userInfo) {
        navigate('/signin');
    }

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber);
    const [district, setDistrict] = useState(shippingAddress.distric);
    const [ward, setWard] = useState(shippingAddress.ward);
    const [city, setCity] = useState(shippingAddress.city);
    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({ fullName, address, phoneNumber, district, ward, city})
        );
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/placeorder');
    }

    return (
        <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" id="form-ship" onSubmit={submitHandler}>
        <div id="content-form">
        <div className="shipping-address">
          <div>
            <h1>Shipping Address</h1>
          </div> 
          <div>
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter your number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="district">District</label>
            <input
              type="text"
              id="district"
              placeholder="Enter your district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="ward"
              placeholder="Enter your country"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></input>
          </div>
        </div>
        <div className="payment-method">
          <div>
          <h3>Payment method</h3>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                required
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="stripe"
                value="Cash"
                name="paymentMethod"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="stripe">Cash</label>
            </div>
          </div>
        </div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
    )
}