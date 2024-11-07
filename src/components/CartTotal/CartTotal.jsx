import {StoreContext} from '../../Context/StoreContext.jsx';
import { useContext } from "react";
import {  useNavigate , useLocation} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./CartTotal.css";

const CartTotal = ({buttonText}) => {
      const { getTotalCartAmount, removeAll } = useContext(StoreContext);
      const navigate = useNavigate();
      const location = useLocation();
      const checkTotal = () => {
        if (getTotalCartAmount() === 0) {
          return false;
        }
        return true;
      }
      // const goPage = () => {
      //   if (location.pathname === "/order") {
      //     localStorage.clear();
      //     removeAll();
      //   return navigate("/");
      //   }
      //   return  navigate("/order")

      // }
      const goPage = () => {
        if (location.pathname === "/order") {
          localStorage.clear();
          removeAll();
        return ;
        }
        return ;

      }

  return (
    <div className="cart-total">
      <h2>Cart Totals</h2>
      <div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}.00</p>
        </div>
        <hr />

        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount() === 0 ? 0 : 2}.00</p>
        </div>
        <hr />

        <div className="cart-total-details total">
          <p>Total</p>
          <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}.00</p>
        </div>
        {/* <!-- this navigate('') will change in both ways in reusable or normal --> */}
      </div>
      <HashLink to={location.pathname === "/order" ? "/":"/order" } replace={location.pathname === '/order' ||location.pathname === '/order#footer' ? true : false } className={`${checkTotal() ? "" : "disabled"} link `} onClick={goPage}>
        {checkTotal() ? buttonText : "Cart is empty"}
      </HashLink>
    </div>
  );
  };
  // <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        // <Link className="link" onClick={goPage} replace={true}>
        //   {buttonText}
        // </Link>;


export default CartTotal;
