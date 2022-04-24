import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CheckoutSteps(props) {
    return (
        <div className="row checkout-steps">
            <div className="col-md-3"></div>
                <div className={props.step1 ? 'active col-md-2' : 'col-md-2'}>Sign-In</div>
                <div className={props.step2 ? 'active col-md-2' : 'col-md-2'}>Shipping</div>
                <div className={props.step3 ? 'active col-md-2' : 'col-md-2'}>Place Order</div>
            <div className="col-md-3"></div>
        </div>
    );
}