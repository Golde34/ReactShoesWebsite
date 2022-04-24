import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../actions/userActions";
import LoadingBox from "../../components/subComponents/LoadingBox";
import MessageBox from "../../components/subComponents/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import '../css/signinScreen.css';


export default function ProfileScreen() {
    const [newPassword, setNewPassword] = useState();
    const [oldPassword, setOldPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const userSignin = useSelector((state) => state.userSignin);
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate
    } = userUpdateProfile;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();
    const { userInfo } = userSignin;
    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
        }
    }, [dispatch, userInfo.id]);
    const submitHandler = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Password and Confirm password are not match!');
        } else {
            dispatch(
                updateUserProfile({
                    userId: userInfo.id,
                    oldPassword,
                    newPassword
                })
            );
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }
        window.location.reload(false); 
    };

    return (
        <div className="signin-up ">
            {loadingUpdate ? (<LoadingBox></LoadingBox>
            ) : (
                <form className="form a list" onSubmit={submitHandler}>
                    <div>
                        <h1>Change Password</h1>
                    </div>
                    <div>
                        {errorUpdate && (
                            <MessageBox variant="danger">{errorUpdate}</MessageBox>
                        )}
                        {successUpdate && (
                            <MessageBox variant="success">
                                Profile Updated Successfully
                            </MessageBox>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">Old password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Your old password"
                            onChange={(e) => setOldPassword(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">New password</label>
                        <input
                            id="newpassword"
                            type="password"
                            placeholder="Your new password"
                            onChange={(e) => setNewPassword(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label />
                        <button className="primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            )}

        </div>
    );
}