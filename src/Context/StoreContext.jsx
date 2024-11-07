
import { createContext ,useState ,useEffect} from "react";
import { food_list } from "../assets/assets.js";

export const StoreContext = createContext(null);
// this is not issue but for ensure types so in reality we use TypeScript for that
const StoreContextProvider = ({children}) => {

    const defaultValue = () => {
      const localData = localStorage.getItem("cartItems");
      // return localData !== null ||  localData !== undefined ? JSON.parse(localData): {} ;
      console.log("localData is ", localData);
      return localData  ? JSON.parse(localData): {} ;
    };


  const [cartItems, setCartItems] = useState(defaultValue());


   const cartItemsLength = Object.keys(cartItems).length;


  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

 console.log(localStorage.getItem('cartItems'));
 console.log(typeof localStorage.getItem('cartItems'));
 console.log("---------------------------------------");
 // localStorage.getItem('cartItems');

//  bad way to access and unexpected behavior not work correctly
//  console.log(typeof localStorage.cartItems);
//  console.log(localStorage.cartItems);

//  console.log("---------------------------------------");
//  console.log(JSON.parse(localStorage.cartItems));
//  console.log(typeof JSON.parse(localStorage.cartItems));
//  console.log(JSON.parse(localStorage.cartItems));
 
  useEffect(() => {
    const localDataBeforeUseEffect = localStorage.getItem("cartItems");
    console.log("localDataBeforeUseEffect ", localDataBeforeUseEffect);
    console.log(typeof localDataBeforeUseEffect);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    const localDataAfterUseEffect = localStorage.getItem("cartItems");
    console.log("localDataAfterUseEffect ", localDataAfterUseEffect);
    console.log(typeof localDataAfterUseEffect);

    // const sumOfLocalStorageValues = JSON.parse(localStorage.getItem("cartItems"));
    // console.log("sumOfLocalStorageValues ", sumOfLocalStorageValues);
    // const accumulator = Object.values(sumOfLocalStorageValues);
    // console.log("accumulator ", accumulator);
    // const calcItemsInLocalstorage = accumulator.reduce(
    //   (acc, current, idx, arr) => {

    //    return acc + current;

    //   },
    //   0
    // );
    //     console.log("calcItemsInLocalstorage after finish ALl ", calcItemsInLocalstorage);
    // calcItemsInLocalstorage === 0  ? localStorage.clear() : " ";
    // if(calcItemsInLocalstorage === 0 ) {
    //   localStorage.clear();
    //   //  window.location.reload();
    //   // removeAll();

    // }
  }, [cartItems]); 
      const sumOfLocalStorageValues = JSON.parse(
      localStorage.getItem("cartItems")
    );
let checkedValue;
console.log(sumOfLocalStorageValues);
   if (sumOfLocalStorageValues) {
    //  const checkedLocalStorage = Object.values(sumOfLocalStorageValues);
     console.log("sumOfLocalStorageValues ", sumOfLocalStorageValues);
     const accumulator = Object.values(sumOfLocalStorageValues);
     console.log("accumulator ", accumulator);
     const calcItemsInLocalstorage = accumulator.reduce(
       (acc, current, idx, arr) => {
         return acc + current;
       },
       0
     );
 checkedValue = calcItemsInLocalstorage;

     console.log(
       "calcItemsInLocalstorage after finish ALl ",
       calcItemsInLocalstorage
     );
   }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems)
    // localStorage.removeItem(itemId);
    ;
    // const noItems = localStorage
    // const ConvertLocalStorageToArray = [...Object.values(localStorage)]; 
    // console.log(ConvertLocalStorageToArray);
   
    // const noItems = ConvertLocalStorageToArray.reduce((acc,current,index,arr)=> (acc + current) !== 0 ? "" : localStorage.clear())
    // console.log(localStorage.removeItem(itemId));
    // console.log(itemId);

// console.log(cartItems)

    

    // calcItemsInLocalstorage === 0 ? localStorage.clear() : " ";
    // calcItemsInLocalstorage === 1 ? window.location.reload() : " ";
    // if (checkedValue === 1) {
    //   window.location.reload();
    //   localStorage.clear();
    // } else if (checkedValue === 0) {
    //   window.location.reload();
    //   setCartItems({});
    // }
    // window.location.reload();



  };
  useEffect(
    (checkedValue) => {
      if (checkedValue === 1) {
        window.location.reload();
        localStorage.clear();
      } else if (checkedValue === 0) {
        window.location.reload();
        setCartItems({});
      }
    },
    [checkedValue]
  );
  console.log(checkedValue);

  const removeAll = () => {
    setCartItems({});
  };
  const getTotalCartAmount = () => {
    
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price* cartItems[item];
      }
    }
    return totalAmount;
  };
  const contextValue = {
    food_list,
    cartItems,
    cartItemsLength,
    setCartItems,
    addToCart,
    removeFromCart,
    removeAll,
    getTotalCartAmount,
    checkedValue,

  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
