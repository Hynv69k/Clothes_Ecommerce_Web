import React, { useEffect, useState } from 'react'
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import ImageProduct from './ImageProduct';
import { IonIcon } from '@ionic/react'; // Import IonIcon từ @ionic/react
import { star,starOutline } from 'ionicons/icons'; 
function DealOfDayProduct() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Gọi API để lấy danh sách category khi component được render
        axios.get(baseURL+`products/tag/${"Deal of the day"}`)
          .then(response => {
            console.log("produtc",response.data)
            // Xử lý dữ liệu trả về từ API
            setProducts(response.data);
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
      }, []);
  return (
    <div className="product-featured">
          <h2 className="title">Deal of the day</h2>
          <div className="showcase-wrapper has-scrollbar">
            {products&&products.map((product)=>(
                <div className="showcase-container">
              <div className={`showcase  id=${product.id}`}>
                <div className="showcase-banner">
                  <ImageProduct id={product.id} name={product.productName} tagName={"deal"} />
                </div>
                <div className="showcase-content">
                  <div className="showcase-rating">
                  <IonIcon icon={star}/>
                  <IonIcon icon={star}/>
                  <IonIcon icon={star}/>
                  <IonIcon icon={starOutline}/>
                  <IonIcon icon={starOutline}/>

        
                  </div>
                  <a href="#">
                    <h3 className="showcase-title">{product.productName}</h3>
                  </a>
                  <p className="showcase-desc" style={{ fontSize:14.8 }}>
                   {product.productDescription??""}
                  </p>
                  <div className="price-box">
                    <p className="price">${product.regularPrice}.00</p>
                    <del>${product.discountPrice}.00</del>
                  </div>
                  <button className="add-cart-btn">add to cart</button>
                  <div className="showcase-status">
                    <div className="wrapper">
                      <p>
                        already sold: <b>20</b>
                      </p>
                      <p>
                        available: <b>40</b>
                      </p>
                    </div>
                    <div className="showcase-status-bar" />
                  </div>
                  <div className="countdown-box">
                    <p className="countdown-desc">
                      Hurry Up! Offer ends in:
                    </p>
                    <div className="countdown">
                      <div className="countdown-content">
                        <p className="display-number">360</p>
                        <p className="display-text">Days</p>
                      </div>
                      <div className="countdown-content">
                        <p className="display-number">24</p>
                        <p className="display-text">Hours</p>
                      </div>
                      <div className="countdown-content">
                        <p className="display-number">59</p>
                        <p className="display-text">Min</p>
                      </div>
                      <div className="countdown-content">
                        <p className="display-number">00</p>
                        <p className="display-text">Sec</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
  )
}

export default DealOfDayProduct
