import './FoodItem.css';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets.js';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";              
  // <p className={searchChars > 0 ? "clarified-search" : ""}>
                //   {name}
                // </p>;


const FoodItem = ( {_id,name,price,description,image}) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <LazyLoadImage
          src={image}
          alt="food-image"
          effect="blur"
          className="food-item-image"
        />

        {!cartItems[_id] ? (
          <img
            onClick={() => addToCart(_id)}
            src={assets.add_icon_white}
            alt="add-icon"
            className="add"
            title="add item"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt="remove-icon"
            />
            <p>{cartItems[_id]}</p>
            <img
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt="add-icon"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{Array.isArray(name) ? name : <span>{name}</span>}</p>
          <img src={assets.rating_starts} alt="rating-starts-image" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default FoodItem;
