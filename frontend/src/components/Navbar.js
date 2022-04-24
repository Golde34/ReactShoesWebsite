import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProductCategories } from "../actions/productActions";
import LoadingBox from "./subComponents/LoadingBox";
import MessageBox from "./subComponents/MessageBox";
import * as FaIcons from "react-icons/fa";
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery.min.js';
import './css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {
    const listCategory = useSelector((state) => state.listCategory);
    const { loading, error, categories } = listCategory;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProductCategories());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (

            <div className= "navbarItems">
                <div className="item-big">
                <div className=" nav-dropdown">
                {/* <button type="button" className="navbar-button btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  */}
                  <Link to="/">
                  <button className="navbar-button">
                <FaIcons.FaBars  /> &nbsp;
                  Menu
                  </button>
                  </Link>
                  {/* <div className="dropdown-menu">
                     
                  </div> */}
               </div>
                    <div>
                    {categories.map((category) => (
                        <Link key={category.idCategory} to={`/category?name=${category.categoryName}`} style={{textDecoration: 'none'}}>
                          <span key={category.idCategory}> 
                            <button className="navbar-button"> 
                              {category.categoryName} 
                            </button>
                          </span>
                        </Link>
                        
                    ))
                    }
                    </div>
                </div>
            </div>
            )}
         </div>
    )
}