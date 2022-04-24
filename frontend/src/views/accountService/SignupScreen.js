import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { register } from "../../actions/userActions";
import LoadingBox from "../../components/subComponents/LoadingBox";
import MessageBox from "../../components/subComponents/MessageBox";
import '../css/signinScreen.css'


export default function RegisterScreen() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchParams = useSearchParams();
    const redirect = searchParams.value
        ? searchParams.value.split('=')[1]
        : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password are not match!');
        } else {
            dispatch(register(fname, lname, email, phone, password));
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    return (
        <div className="signin-up">
            <form className="form" onSubmit={submitHandler}>
                <div className="head">
                    <h1>Signup </h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="fname">First name</label>
                    <input
                        type="text"
                        id="fname"
                        placeholder="First name"
                        required
                        onChange={(e) => setFname(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="lname">Last name</label>
                    <input
                        type="text"
                        id="lname"
                        placeholder="Last name"
                        required
                        onChange={(e) => setLname(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="number"
                        id="phone"
                        placeholder="phone"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit" >
                        Signup
                    </button>
                </div>
                <div>
                    <label />
                    <div className="account">
                        Already has account?{' '}
                        <Link to={`/signin?redirect=${redirect}`} style={{ textDecoration: 'none' }}>Signin</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}