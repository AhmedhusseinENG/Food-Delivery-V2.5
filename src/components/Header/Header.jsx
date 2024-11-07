import { StoreContext } from "../../Context/StoreContext.jsx";
import { useState, useContext } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { assets } from "../../assets/assets.js";
// <ul className="header-menu">
//     <Link  to="/"   onClick={()=> setMenu("home")} className={menu === "home" ? "active" : ""}>home  </Link>
//    <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
//      <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
//              <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>

// </ul>

const Header = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, food_list, cartItems, cartItemsLength} =
    useContext(StoreContext);

  // const itemsInCart = food_list
  //   .map((item, index) => cartItems[item._id])
  //   .reduce((acc, current, index, arr) => acc + current);

  const itemsInCart = food_list
    .map((item, index) => cartItems[item._id])
    .filter((item) => item !== undefined)
    .reduce((acc, current, index, arr) => acc + current, 0);

  // console.log(itemsInCart)

  const location = useLocation();
  let sharedLocalSection = "#footer";
  if (location.pathname !== "/") {
    sharedLocalSection = `${location.pathname + sharedLocalSection}`;
  }
  const searchFn = () => {
      <HashLink to={"/#food-display"}></HashLink>;
  };
  return (
    <div className="header">
      <HashLink to="/">
        {" "}
        <img src={assets.logo} alt="logo" className="logo" />{" "}
      </HashLink>
      <ul className="header-menu">
        <HashLink
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home{" "}
        </HashLink>
        <HashLink
          to="/#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </HashLink>
        <HashLink
          to="/#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </HashLink>
        <HashLink
          replace={true}
          to={sharedLocalSection}
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </HashLink>
      </ul>
      <div className="header-right">
        <HashLink to={"/#food-display"}>
          <img src={assets.search_icon} alt="icon" />
        </HashLink>
        <div className="header-search-icon">
          <HashLink to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="basket-icon" />
            <div className={getTotalCartAmount() === 0 ? "dot-0" : "dot-1"}>
              {cartItemsLength > 0 ? itemsInCart : ""}
            </div>
          </HashLink>
        </div>
        <button onClick={() => setShowLogin(true)}>Log in</button>
      </div>
    </div>
  );
};

export default Header;
