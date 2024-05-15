// SidebarMenuCategory.js
import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react'; // Import IonIcon từ @ionic/react
import { addOutline, removeOutline } from 'ionicons/icons'; // Import các biểu tượng cụ thể từ ionicons/icons
import SidebarSubmenuCategory from './SidebarSubmenuCategory';
import Axios  from 'axios';
import baseURL from '../../../api/BaseUrl';

const SidebarMenuCategory = ({ data }) => {

  const [isActive, setIsActive] = useState(false);
  const [subCategory,setSubCategory]=useState([]);
  useEffect(() => {
    // Gọi API để lấy danh sách category khi component được render
    Axios.get(baseURL+`categories/parent/${data.id}`)
      .then(response => {
        console.log("subcate" +data.id, response.data)
        setSubCategory(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, [data.id]);
  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <li className="sidebar-menu-category">
      <button className={`sidebar-accordion-menu ${isActive ? 'active' : ''}`} onClick={toggleAccordion} data-accordion-btn>
        <div className="menu-title-flex">
          <img src={data.icon} alt={data.icon} width={20} height={20} className="menu-title-img" />
          <p className="menu-title">{data.categoryName}</p>
        </div>
        <div>
          {isActive ? (
            <IonIcon icon={removeOutline} className="remove-icon" /> // Sử dụng biểu tượng removeOutline khi isActive là true
          ) : (
            <IonIcon icon={addOutline} className="add-icon" /> // Sử dụng biểu tượng addOutline khi isActive là false
          )}
        </div>
      </button>
      <ul className={`sidebar-submenu-category-list ${isActive ? 'active' : ''}`} data-accordion>
        {subCategory.map((item, index) => (
          <SidebarSubmenuCategory key={index} item={item} />
        ))}
      </ul>
    </li>
  );
};

export default SidebarMenuCategory;
