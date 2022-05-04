import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, deleteCategory, detailsCategory, listProductCategories, updateCategory } from "../../actions/productActions";
import { CATEGORY_UPDATE_RESET, CREATE_CATEGORY_RESET, DELETE_CATEGORY_RESET } from "../../constants/productConstants";
import { useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../../components/subComponents/LoadingBox";
import MessageBox from "../../components/subComponents/MessageBox";


export const ProductsTypeManage = () => {
    const navigate = useNavigate();
    const listCategory = useSelector((state) => state.listCategory);
    const {
        loading: loadingCategory,
        error: errorCategory,
        categories
    } = listCategory;
    const categoryDelete = useSelector((state) => state.categoryDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = categoryDelete;
    const dispatch = useDispatch();
    useEffect(() => {
        if (successDelete) {
            dispatch({ type: DELETE_CATEGORY_RESET });
        }
        dispatch(listProductCategories());
    }, [dispatch, successDelete, navigate]);
    const deleteHandler = (category) => {
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deleteCategory(category.idCategory));
        }
    };

    return (
        <div className='ProductsType'>
            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
            {loadingCategory ? (
                <LoadingBox></LoadingBox>
            ) : errorCategory ? (
                <MessageBox variant="danger"> {errorCategory}</MessageBox>
            ) : (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Danh mục</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((category) => (
                                    <tr >
                                        <td>{category.idCategory}</td>
                                        <td>{category.categoryName}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() =>
                                                    navigate(`${category.idCategory}/edit`)
                                                }
                                            >
                                                Chỉnh sửa
                                            </button>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() => deleteHandler(category)}
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
}


export const AddProductsType = () => {
    const navigate = useNavigate();
    const [nameCategory, setNameCategory] = useState('');
    const categoryCreate = useSelector((state) => state.categoryCreate);
    const {
        success: successCreate
    } = categoryCreate;
    const dispatch = useDispatch();
    useEffect(() => {
        if (successCreate) {
            dispatch({ type: CREATE_CATEGORY_RESET });
            navigate(`/productsType/productsTypeManage`);
        }
    }, [dispatch, successCreate, navigate]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createCategory({ nameCategory }));
        window.location.reload(false); 
    };
    return (
        <div className='AddProductsType'>
            <form className="form a list" onSubmit={submitHandler}>
                <div><h1>Thêm danh mục</h1></div>
                <div>
                    <label htmlFor="name">Tên danh mục</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nhập tên danh mục"
                        value={nameCategory}
                        onChange={(e) => setNameCategory(e.target.value)}
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
    )
};


export const EditCategory = () => {
    // const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { id } = useParams();
    const categoryId = id;
    const [name, setName] = useState('');
    const categoryUpdate = useSelector((state) => state.categoryUpdate);
    const {
        success: successUpdate,
    } = categoryUpdate;

    const categoryDetails = useSelector((state) => state.categoryDetails);

    const { category } = categoryDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        if (successUpdate) {
            navigate(`/productsType/productsTypeManage`);
        }
        if (!category || successUpdate) {
            dispatch({ type: CATEGORY_UPDATE_RESET });
            dispatch(detailsCategory(categoryId));
        } else {
            setName(category.categoryName);
        }
    }, [category, dispatch, categoryId, successUpdate, navigate]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateCategory({
            id: categoryId,
            name,
        }));
        window.location.reload(false); 
    };

    return (
        <div>
            <form className="form a list" onSubmit={submitHandler}>
                <div>
                    <h1>Chỉnh sửa danh mục{name}</h1>
                </div>
                <div>
                    <label htmlFor="name">Tên danh mục</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nhập tên danh mục"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
            </form>
        </div>
    );
}