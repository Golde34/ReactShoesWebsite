import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { signin } from "../../actions/userActions";
import LoadingBox from "../../components/subComponents/LoadingBox";
import MessageBox from "../../components/subComponents/MessageBox";
import '../css/signinScreen.css';


export default function SigninScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  const redirect = searchParams.value
    ? searchParams.value.split('=')[1]
    : '/';
  // const redirect = props.location.search
  //     ? props.location.search.split('=')[1]
  //     : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="signin-up ">
      <form className="form" onSubmit={submitHandler}>
        <div className="head">
          <img className="login_image"
            src="..//../image/logo.png" alt="" />
          <h1>Signin</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="info">
          <label htmlFor="email">Email</label>
          <input className="infor"
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="infor"
            type="password"
            id="password"
            placeholder="Password..."
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Signin
          </button>
        </div>
        <div>
          <label />
          <div className="account">
            Don't have account?{' '}
            <Link to={`/register?redirect=${redirect}`} style={{ textDecoration: 'none' }}>
              Register now!
            </Link>
          </div>
        </div>
      </form>

    </div>
  );
}
