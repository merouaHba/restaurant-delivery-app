import { Cart, Footer, NavBar } from '@components/index'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from '@context/StateProvider';
import Contact from '@components/Contact';
import { calculateCartTotal, dispatchUsers, fetchFoodData, fetchUserCartData, isAdmin } from '@utils/functions';
import { useEffect } from 'react';

const MainLayout = () => {
    const [
      { showCart, showContactForm, user, foodItems, cartItems, adminMode },
      dispatch,
  ] = useStateValue();
   useEffect(() => {
     fetchFoodData(dispatch);
     dispatchUsers(dispatch);
     user && fetchUserCartData(user, dispatch);
   }, []);

   useEffect(() => {
     foodItems &&
       cartItems.length > 0 &&
       calculateCartTotal(cartItems, foodItems, dispatch);
   }, [cartItems, foodItems, dispatch]);
  return (
    <AnimatePresence mode="wait">
      <ToastContainer />
      <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
        {showCart && <Cart />}
        {showContactForm && <Contact />}
        {!(adminMode && isAdmin(user)) && <NavBar />}
        <main
          className={`${
            !(adminMode && isAdmin(user)) &&
            "mt-24 md:mt-24 px-3 md:px-8 md:py-6 py-4"
          } w-full h-auto`}
          onClick={() => {}}
        >
          <Outlet />
        </main>
        {!(adminMode && isAdmin(user)) && <Footer />}
      </div>
    </AnimatePresence>
  );
}

export default MainLayout