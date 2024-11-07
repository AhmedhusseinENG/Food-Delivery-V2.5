import './Banner.css'
import { HashLink } from "react-router-hash-link";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-contents">
        <h2>Order your favorite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array Of dishes
          crafted With the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <HashLink to="/#explore-menu" >
          <button>View Menu</button>
        </HashLink>
      </div>
    </div>
  );
}

export default Banner
