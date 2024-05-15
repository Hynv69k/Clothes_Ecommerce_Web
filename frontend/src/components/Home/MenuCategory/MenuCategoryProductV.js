import React, { useEffect, useState } from 'react'
import dress  from '../../../assets/images/icons/dress.svg';
import shoes  from '../../../assets/images/icons/shoes.svg';
import jewelry  from '../../../assets/images/icons/jewelry.svg';
import perfume  from '../../../assets/images/icons/perfume.svg';
import cosmetics  from '../../../assets/images/icons/cosmetics.svg';
import glasses  from '../../../assets/images/icons/glasses.svg';
import bag  from '../../../assets/images/icons/bag.svg';
import SidebarMenuCategory from './SidebarMenuCategory';
import axios from 'axios';
import baseURL from '../../../api/BaseUrl';
import BestSellerProduct from '../BestSellerProduct';
import { IonIcon } from '@ionic/react'; // Import IonIcon từ @ionic/react
import { closeOutline } from 'ionicons/icons'; 
function MenuCategoryProductV() {
  const [menuData1, setMenuData1] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách category khi component được render
    axios.get(baseURL + 'categories/root')
      .then(response => {
        console.log(response.data)
        // Xử lý dữ liệu trả về từ API
        const combinedMenuData = response.data.map((item, index) => {
          // Kết hợp thuộc tính từ menuData2 vào menuData1 dựa trên index
          return { ...item, ...menuData2[index] };
        });
        console.log(combinedMenuData);
        setMenuData1(combinedMenuData);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);
  
  const menuData2 = [
    {
      icon: dress,
    },
    {
      icon: shoes,
    },
    {
      icon: jewelry,
    },
    {
      icon: perfume,
    },
    {
      icon: cosmetics,
    },
    {
      icon: glasses,
    },
    {
      icon: bag,
    }
  ];
  
  return (
    <div className="sidebar  has-scrollbar" data-mobile-menu>
        <div className="sidebar-category">
          <div className="sidebar-top">
            <h2 className="sidebar-title">Category</h2>
            <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <IonIcon icon={closeOutline} />
            </button>
          </div>
          <ul className="sidebar-menu-category-list">
          {menuData1.map((menu, index) => (
        <SidebarMenuCategory key={index} data={menu} />
      ))}
          </ul>
        </div>
        <BestSellerProduct/>
      </div>
  )
}

export default MenuCategoryProductV

 
