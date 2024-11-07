import { useState, useEffect ,lazy ,Suspense } from 'react'; 
import  LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
const Banner = lazy(()=> import('../../components/Banner/Banner'));
const ExploreMenu = lazy(()=> import("../../components/ExploreMenu/ExploreMenu"));
const FoodDisplay = lazy(()=> import('../../components/FoodDisplay/FoodDisplay'));
const AppDownload = lazy(()=> import('../../components/AppDownload/AppDownload'));

// import Banner from '../../components/Banner/Banner';
// import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
// import AppDownload from '../../components/AppDownload/AppDownload'
// import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
// import AppDownload from "../../components/AppDownload/AppDownload";



const Home = () => {
  const defaultSelection = () => {
    const selectedDish = localStorage.getItem("category");
    return selectedDish ? JSON.parse(selectedDish) : "All";
  } 
  const [category, setCategory] = useState(defaultSelection);
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);
  return (
    <div>
    <Suspense fallback={<LoadingAnimation />}> 
    
    <Banner />
    <ExploreMenu category={category} setCategory={setCategory} />
    <FoodDisplay category={category} />
    <AppDownload />
    </Suspense>
    </div>
  );
}

export default Home
