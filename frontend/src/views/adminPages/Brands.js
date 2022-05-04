import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrand, deleteBrand, detailsBrand, listProductBrands, updateBrand } from "../../actions/productActions";
import { BRAND_UPDATE_RESET, CREATE_BRAND_RESET, DELETE_BRAND_RESET } from "../../constants/productConstants";
import { useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../../components/subComponents/LoadingBox";
import MessageBox from "../../components/subComponents/MessageBox";


export const BrandsManage = () => {
    const listBrand = useSelector((state) => state.listBrand);
    const { loading: loadingBrand, error: errorBrand, brands } = listBrand;
    const brandDelete = useSelector((state) => state.brandDelete);
    const {
        success: successDelete,
    } = brandDelete;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (successDelete) {
            dispatch({ type: DELETE_BRAND_RESET });
        }
        dispatch(listProductBrands());
    }, [dispatch, successDelete, navigate]);
    const deleteHandler = (brand) => {
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deleteBrand(brand.idBrand));
        }
    };

    return (
        <div className='ProductsType'>
            <h1>Quản lý nhãn hàng</h1>
            {loadingBrand ? (
                <LoadingBox></LoadingBox>
            ) : errorBrand ? (
                <MessageBox variant="danger"> {errorBrand}</MessageBox>
            ) : (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nhãn hàng</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                brands.map((brand) => (
                                    <tr >
                                        <td>{brand.idBrand}</td>
                                        <td>{brand.brandName}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() =>
                                                    navigate(`/brands/${brand.idBrand}/edit`)
                                                }
                                            >
                                                Chỉnh sửa
                                            </button>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() => deleteHandler(brand)}
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </>)}
        </div>
    );
};


export const AddBrands = () => {
    const [nameBrand, setNameBrand] = useState('');
    const brandCreate = useSelector((state) => state.brandCreate);
    const {
        success: successCreate
    } = brandCreate;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (successCreate) {
            dispatch({ type: CREATE_BRAND_RESET });
            navigate(`/brands/brandsManage`);
        }
    }, [dispatch, successCreate, navigate]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createBrand({
            nameBrand,
        }));
        window.location.reload(false); 
    };

    return (
        <div className='AddProductsType'>
            <form className="form a list" onSubmit={submitHandler}>
                <div><h1>Thêm nhãn hàng</h1></div>
                <div>
                    <label htmlFor="name">Tên nhãn hàng</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nhập tên nhãn hàng"
                        value={nameBrand}
                        onChange={(e) => setNameBrand(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label></label>
                    <button className="primary" type="submit">
                        Cập nhật
                    </button>
                </div>
            </form>
        </div>
    );
};


export const EditBrand = () => {
    const { id } = useParams();
    const brandId = id;
    const [name, setName] = useState('');
    const brandUpdate = useSelector((state) => state.brandUpdate);
    const {
        success: successUpdate,
    } = brandUpdate;
    const brandDetails = useSelector((state) => state.brandDetails);
    const { brand } = brandDetails;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (successUpdate) {
            navigate(`/brands/brandsManage`);
        }
        if (!brand || successUpdate) {
            dispatch({ type: BRAND_UPDATE_RESET });
            dispatch(detailsBrand(brandId));
        } else {
            setName(brand.brandName);
        }
    }, [dispatch, brand, brandId, successUpdate, navigate]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateBrand({
            id: brandId,
            name,
        }));
        window.location.reload(false); 
    };
    return (
        <div>
            <form className="form a list" onSubmit={submitHandler}>
                <div>
                    <h1>Chỉnh sửa nhãn hàng {name}</h1>
                </div>
                <div>
                    <label htmlFor="name">Tên nhãn hàng</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nhập tên nhãn hàng"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
            </form>
        </div>
    );
}