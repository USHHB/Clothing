import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
import { Route, Routes, Switch } from "react-router-dom";
import ShopPage from "./Pages/shop/shop.component";



function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />;
        <Route path="/shop" component={ShopPage} />;
      </Switch>
    </>
  );
}

export default App;
