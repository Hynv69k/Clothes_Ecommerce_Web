// SidebarSubmenuCategory.js
import React from 'react';

const SidebarSubmenuCategory = ({ item }) => {
  return (
    <li className="sidebar-submenu-category">
      <a href=" " className="sidebar-submenu-title">
        <p className="product-name">{item.categoryName}</p>
        {/* <data value={stock} className="stock" title="Available Stock">{stock}</data> */}
      </a>
    </li>
  );
};

export default SidebarSubmenuCategory;
