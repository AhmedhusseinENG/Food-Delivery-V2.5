// Lazy Loading
import { lazy ,Suspense } from 'react';
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation.jsx"; 
const Home = lazy(()=> import ('../pages/Home/Home') ) ;
const Cart = lazy(()=> import ("../pages/Cart/Cart") ) ;
const PlaceOrder = lazy(()=> import ("../pages/PlaceOrder/PlaceOrder") ) ;
const MainLayout = lazy(()=> import ('../layouts/MainLayout/MainLayout.jsx') ) ;


// import Home from '../pages/Home/Home';
// import Cart from "../pages/Cart/Cart";
// import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
// import MainLayout from '../layouts/MainLayout/MainLayout.jsx';


import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const AppRouter = () => {

    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingAnimation />}>
            <MainLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingAnimation />}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: "/cart",
            element: (
              <Suspense fallback={<LoadingAnimation />}>
                <Cart />
              </Suspense>
            ),
            
          },
          {
            path: "/order",
            element: (
              <Suspense fallback={<LoadingAnimation />}>
                <PlaceOrder />
              </Suspense>
            ),
          },
        ],
      },
    ]);
        

  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter
