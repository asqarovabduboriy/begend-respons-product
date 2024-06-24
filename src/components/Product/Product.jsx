import React from "react";
import "./product.css";
import { useGetProductsQuery } from "../../context/api/productsApi";
import img from '../../assets/imgs/image.png'
import { CiHeart } from "react-icons/ci";
import taqoslqsh from "../../assets/imgs/taqoslash.svg";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Product = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  let products = data?.data?.products?.map((product) => (
    <div className="product" key={product.id}>
         <div className="new"><span>Yangi</span></div>
        <div className="icons_map">
             <button><CiHeart/></button>
             <button><img src={taqoslqsh} alt="" /></button>
        </div>
      <div className="img">
        <img
          src={product.urls[0] || img}
          alt={product.title}
          onError={(e) => (e.target.src = img)}
        />
      </div>
      <h3>{product.title}</h3>
      <div className="rating">
           {
              Array(5).fill().map((_,i)=> <FaStar key={i} style={{color:"#FFC107"}}/>)
           }
      </div>
      <h3 className="price">{product.price} so'm</h3>
      <div className="orange_rektangle">
        <span>{product.oldPrice} so'm x 12oy</span>
      </div>
      <div className="btn_warpper">
           <button className="btn_buy">Hoziroq sotib olish</button>
           <button className="btn_cart"><FaCartShopping/></button>
      </div>

    </div>
  ));

  console.log(data?.data?.products);
  return (
    <>
      <div className="container">
        <h1>Products</h1>
        <div className="warpper">{products}</div>
      </div>
    </>
  );
};

export default Product;
