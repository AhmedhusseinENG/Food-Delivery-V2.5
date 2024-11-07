
import { StoreContext } from '../../Context/StoreContext.jsx';
import { useContext } from 'react';
import './PlaceOrder.css';
import { Link } from 'react-router-dom';
import CartTotal from '../../components/CartTotal/CartTotal.jsx';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>

      <div className="place-order-right">
        <CartTotal buttonText="PROCEED TO PAYMENT" />
      </div>
    </form>
  );
        }
        
        export default PlaceOrder
        
        // <Link to={'/#footer'} replace={true} >PROCEED TO PAYMENT</Link>