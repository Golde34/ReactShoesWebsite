import React, { useEffect } from 'react';
import "./css/home.css";
import "./css/CategoryScreen.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { searchCategory } from '../actions/searchActions';
import LoadingBox from '../components/subComponents/LoadingBox';
import MessageBox from '../components/subComponents/MessageBox';
import { prices } from "../utils";
import Product from '../components/Product';

export default function CategoryScreen() {
    const [params, setParams] = useSearchParams();
    const name = params.get('name') || '';
    const page = params.get('page') || '';
    const min = params.get('min') || '';
    const max = params.get('max') || '';
    const limit = 10;
    const categorySearch = useSelector((state) => state.categorySearch);
    const { loading, error, data, pages } = categorySearch;
    const dispatch = useDispatch();
    console.log(params);
    console.log(name + " " + page + " " + min + " " + max);
    useEffect(() => {
        dispatch(searchCategory(name, page, limit, min, max));
    }, [dispatch, name, page, limit, min, max]);

    const getFilterUrl = (filter) => {
        const filterPage = filter.page > 0 ? filter.page : filter.page === 0 ? 1 : page >= 0 ? page : 1;
        const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
        const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
        return `/category?name=${name}&page=${filterPage - 1}&min=${filterMin}&max=${filterMax}`;
    }

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className='home'>
                    <div className='category__container'>
                        <div className='price-filter-container'>
                            <ul className='price-filter'>
                                {prices.map((price) => (
                                    <li key={price.tag} className="" >
                                        <Link to={getFilterUrl({ min: price.min, max: price.max })}>
                                            <span>{price.tag}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {data.length > 0 ? (
                                data[0].products.length > 0 ? (
                                    <div className="home__row" >
                                        {data[0].products.map((product) => (
                                            <Product key={product.idProduct} product={product}> </Product>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="error-box">
                                        <MessageBox variant="danger"> "No founded product."</MessageBox>
                                    </div>
                                )
                            ) : (
                                <MessageBox variant="danger"> "No founded product."</MessageBox>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}