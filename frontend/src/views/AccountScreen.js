import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/subComponents/LoadingBox";
import MessageBox from "../components/subComponents/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import './css/account.css';


export default function AccountScreen() {
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate,
    } = userUpdateProfile;
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!user) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo.id));
        } else {
            setFname(user.userFname);
            setLname(user.userLname);
            setPhone(user.phone);
            setAddress(user.address);
        }
    }, [dispatch, userInfo.id, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        dispatch(
            updateUserProfile({
                userId: user.id, Fname, Lname, phone, address
            })
        );
        window.location.reload(false); 
    };

    return (
        <div className="signin-up">
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                </div>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        {loadingUpdate && <LoadingBox></LoadingBox>}
                        {errorUpdate && (
                            <MessageBox variant="danger">{errorUpdate}</MessageBox>
                        )}
                        {successUpdate && (
                            <MessageBox variant="success">
                                Profile Updated Successfully
                            </MessageBox>
                        )}
                        <div>
                            <label htmlFor="Fname">First Name</label>
                            <input
                                id="Fname"
                                type="text"
                                placeholder="Enter name"
                                value={Fname}
                                onChange={(e) => setFname(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="Lname">Last Name</label>
                            <input
                                id="Lname"
                                type="text"
                                placeholder="Enter name"
                                value={Lname}
                                onChange={(e) => setLname(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input
                                id="address"
                                type="text"
                                placeholder="Enter address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label />
                            <button className="primary" type="submit">
                                Update
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}