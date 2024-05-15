import React, { useEffect, useState } from 'react'
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import ImageProduct from './ImageProduct';
import { IonIcon } from '@ionic/react'; // Import IonIcon từ @ionic/react
import { star } from 'ionicons/icons'; 
function BestSellerProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Gọi API để lấy danh sách category khi component được render
      axios.get(baseURL+`products/tag/${"best sellers"}`)
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
    <div className="product-showcase">
    <h3 className="showcase-heading">best sellers</h3>
    <div className="showcase-wrapper">
      <div className="showcase-container">
        {products&&products.map((product)=>(
            <div className={`showcase  id=${product.id}`}  key={product.id}>
          <a href="#" className="showcase-img-box">
          <ImageProduct id={product.id} name={product.productName} tagName={"best sellers"}/>
          </a>
          <div className="showcase-content">
            <a href="#">
              <h4 className="showcase-title">{product.productName}</h4>
            </a>
            <div className="showcase-rating">
             <IonIcon icon={star}/>
             <IonIcon icon={star}/>
             <IonIcon icon={star}/>
             <IonIcon icon={star}/>
             <IonIcon icon={star}/>
            </div>
            <div className="price-box">
              <del>${product.discountPrice}.00</del>
              <p className="price">${product.regularPrice}.00</p>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  </div> 
  )
}

export default BestSellerProduct
