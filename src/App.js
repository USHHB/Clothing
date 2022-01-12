import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
import { Route, Routes, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />;
        <Route path="/hats" component={HatsPage} />;
      </Switch>
    </>
  );
}

export default App;
