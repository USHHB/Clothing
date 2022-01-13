import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
import { Route, Routes, Switch } from "react-router-dom";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header";



function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />;
        <Route path="/shop" component={ShopPage} />;
      </Switch>
    </>
  );
}

export default App;
