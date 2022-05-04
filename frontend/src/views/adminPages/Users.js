import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { deleteUser, detailsUser, listUsers, updateUserProfile } from "../../actions/userActions";
import LoadingBox from "../../components/subComponents/LoadingBox";
import MessageBox from "../../components/subComponents/MessageBox";
import { USER_DELETE_RESET, USER_UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import '../css/userManage.css';


export default function UsersManage() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const page = searchParam.get("page");

  const userList = useSelector((state) => state.userList);
  const { loading, error, users, pages } = userList;
  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers(page));
    dispatch({ type: USER_DELETE_RESET });
  }, [dispatch, successDelete, page]);

  const deleteHandler = (user) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteUser(user.idUser));
    }
  };
  const getFilterUrl = (filter) => {
    const filterPage = filter.page > 0 ? filter.page : filter.page === 0 ? 1 : page >= 0 ? page : 1;
    return `/usersManage?page=${filterPage - 1}`;
  }

  return (
    <div className="users">
      <h1>Danh sách người dùng</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">User deleted successfully</MessageBox>
      )}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="table-content">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Admin</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.idUser}>
                    <td>{user.idUser}</td>
                    <td>{user.userFname} {user.userLname}</td>
                    <td>{user.userEmail}</td>

                    <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                    <td>
                      <button
                        type="button"
                        className="small"
                        onClick={() => navigate(`/user/${user.idUser}/edit`)}
                      >
                        Chỉnh sửa
                      </button>
                      <button
                        type="button"
                        className="small"
                        onClick={() => deleteHandler(user)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination-container">
            <div className="row center pagination">
              {[...Array(pages).keys()].map((x) => (
                <Link
                  className={x === page ? 'active' : ''}
                  key={x}
                  to={getFilterUrl({ page: x + 1 })}
                >
                  <li className='page-item'>
                    <span>
                      {x + 1}
                    </span>
                  </li>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const EditUser = () => {
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