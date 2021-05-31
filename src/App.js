import React from "react";
import { Route } from "react-router";

import { Footer, Navbar, SideDrawer } from "./components";
import {
  Cart,
  Collection,
  Home,
  Product,
  Signin,
  Signup,
  Story
} from "./pages";
import { useApp } from "./utils/contexts/AppContext";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  const { showSideDrawer, sideDrawerHandler } = useApp();
  return (
    <>
      <ScrollToTop />
      <Navbar sideDrawerHandler={sideDrawerHandler} />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/inspiration/:storyId" component={Story} />
        <Route exact path="/collections/:collectionId" component={Collection} />
        <Route
          exact
          path="/collections/:collectionId/:productId"
          component={Product}
        />
      </div>
      {showSideDrawer && <SideDrawer sideDrawerHandler={sideDrawerHandler} />}
      <Footer />
    </>
  );
};

export default App;
