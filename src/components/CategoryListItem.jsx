import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryListItem({ product }) {
  const setPrice = parseInt(product.price).toLocaleString();
  const navigate = useNavigate();
  const detail = () => {
    navigate(`products/${product.category}/${product.id}`, {
      state: {
        title: product.title,
        id: product.id,
        image: product.image,
        price: product.price,
        caption: product.caption,
        category: product.category,
        description: product.description,
      },
    });
  };
  return (
    <div onClick={detail} className="productsItem">
      <img src={product.image} alt={product.title} />
      <div className="textWrap">
        <h3 className="itemTitle">{product.title}</h3>
        <div className="itemFlex">
          <p className="itemPrice">{setPrice} 원</p>
          <p className="itemOpt">{product.caption}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryListItem;
