import React, { useState } from 'react';
import '../Styles/components/ItemCard.css'; // Optional CSS for styling the card
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../Features/CartSlice';

const ItemCard = ({ image, name, price }) => {

  const [added , setAdded] = useState(false);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if(added){
      setAdded(!added)
      dispatch(removeFromCart({
        image : image,
        name : name,
        price : price
      }))
    }else{
      setAdded(!added)
      dispatch(addToCart({
        image : image ,
        name : name,
        price : price
      }))
    }
  }

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <p className="card-price">{price}</p>
        <h2 className="card-name">{name}</h2>
        <button className={`card-btn ${added ? 'added' : ''}`} onClick={addToCartHandler} >{added ? "Remove" : "Add to Cart"}</button>
      </div>
    </div>
  );
};

export default ItemCard;