import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';
import { useContext,useState } from 'react';
import { StoreContext } from '../../Context/StoreContext.jsx';
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";  

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext);
  const [search, setSearch] = useState('');
  // const searchChars = search.length ; 


  const highlightMatch = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };


  
  const handelSearch = (e) => {
    const searchedDish = e.target.value.toLowerCase();
    setSearch(searchedDish);
    console.log(searchedDish);
  }
  return (
    <div className="food-display" id="food-display">
      <div className="search-bar">
        <h2>Top dishes near you</h2>
        <input
          id="click-to-serach"
          onChange={(e) => handelSearch(e)}
          type="text"
          placeholder="Search your favorite dish"
        />
      </div>


        <div className="food-display-list">
          {food_list
            .filter((item, index) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item, index) => {
              {
                /**<!-- try use best practice by others={...item} then in the FoodItem make distructure props  --> */
              }

              if (category === "All" || category === item.category) {
                return (
                  <LazyLoadComponent key={index}>
                    <FoodItem
                      {...item}
                      name={highlightMatch(item.name, search)}
                    />
                  </LazyLoadComponent>
                );
                // return
              }
              {
                /** <!-- if not work use normal way --> */
              }
            })}
        </div>
    </div>
  );
}

export default FoodDisplay
