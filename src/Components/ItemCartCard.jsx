import React from 'react';
import '../Styles/components/ItemCard.css'; 
import "../Styles/components/CartCard.css"
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Features/CartSlice';

const ItemCartCard = ({ image, name, price, size }) => {

  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart({
      image : image,
      name : name,
      price : price
    }))
  }

  return (
    <div className="cartcard">
      <img src={image} alt={name} className="cart-card-image" />
      <div className="cart-card-content">
        <p className="cart-card-price">{price}</p>
        <h2 className="cart-card-name">{name}</h2>
        <h4 >Quantity : {size}</h4>
      </div>
      <div className="delete-from-cart" onClick={removeFromCartHandler}>❌</div>
    </div>
  );
};

export default ItemCartCard;