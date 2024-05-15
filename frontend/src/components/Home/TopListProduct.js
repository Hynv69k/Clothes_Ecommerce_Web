import React, { useEffect, useState } from 'react'
import baseURL from '../../api/BaseUrl';
import axios from 'axios';
import ImageProduct from './ImageProduct';
function TopListProduct({tagName,limit}) {
    const [products, setProducts] = useState([]);
    const [products1, setProducts1] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [products3, setProducts3] = useState([]);
    useEffect(() => {
      // Gọi API để lấy danh sách category khi component được render
      axios.get(baseURL+`products/tag/${tagName}`)
        .then(response => {
          console.log("produtc",response.data)
          // Xử lý dữ liệu trả về từ API
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }, []);
    useEffect(() => {
        // Chia mảng products thành hai mảng con
        if (products.length > 0) {
            setProducts1(products.slice(0, 4)); // Lấy 4 sản phẩm đầu tiên
            setProducts2(products.slice(4, 8)); // Lấy 4 sản phẩm tiếp theo
        }
        if(products.length >8){
          setProducts3(products.splice(8,12))
        }
    }, [products]);
  return (
    <div className="product-showcase">
            <h2 className="title">{tagName}</h2>
            <div className="showcase-wrapper has-scrollbar">
            <div className="showcase-container"  key={1}>
            {products1&&products1.map((product)=>(
                     <div className={`showcase  id=${product.id}`}  key={product.id}>
                     <a href="#" className="showcase-img-box">
                     <ImageProduct id={product.id} name={product.productName} tagName={"toplist"}/>
                     </a>
                     <div className="showcase-content">
                       <a href="#">
                         <h4 className="showcase-title">{product.productName}</h4>
                       </a>
                       {product.categories[0] &&
                  product.categories[0].categoryName && (
                    <a href="#" className="showcase-category">
                      {product.categories[0].categoryName}
                    </a>
                  )}
                       <div className="price-box">
                         <p className="price">${product.regularPrice}.00</p>
                         <del>${product.discountPrice}.00</del>
                       </div>
                     </div>
                   </div>
                  
                ))}
                 </div>
                {products2.length>0&&
                <div className="showcase-container"  key={1}>
                {products2&&products2.map((product)=>(
                         <div className="showcase"  key={product.id}>
                         <a href="#" className="showcase-img-box">
                         <ImageProduct id={product.id} name={product.productName} tagName={"toplist"}/>
                         </a>
                         <div className="showcase-content">
                           <a href="#">
                             <h4 className="showcase-title">{product.productName}</h4>
                           </a>
                           {product.categories[0] &&
                  product.categories[0].categoryName && (
                    <a href="#" className="showcase-category">
                      {product.categories[0].categoryName}
                    </a>
                  )}
                           <div className="price-box">
                             <p className="price">${product.regularPrice}.00</p>
                             <del>${product.discountPrice}.00</del>
                           </div>
                         </div>
                       </div>
                      
                    ))}
                     </div>
                } 
                  {products3.length>0&&
                <div className="showcase-container"  key={1}>
                {products3&&products3.map((product)=>(
                         <div className="showcase"  key={product.id}>
                         <a href="#" className="showcase-img-box">
                         <ImageProduct id={product.id} name={product.productName} tagName={"toplist"}/>
                         </a>
                         <div className="showcase-content">
                           <a href="#">
                             <h4 className="showcase-title">{product.productName}</h4>
                           </a>
                           {product.categories[0] &&
                  product.categories[0].categoryName && (
                    <a href="#" className="showcase-category">
                      {product.categories[0].categoryName}
                    </a>
                  )}
                           <div className="price-box">
                             <p className="price">${product.regularPrice}.00</p>
                             <del>${product.discountPrice}.00</del>
                           </div>
                         </div>
                       </div>
                      
                    ))}
                     </div>
                } 
              </div>
            </div>
  )
}

export default TopListProduct
