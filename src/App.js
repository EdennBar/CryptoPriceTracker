import './App.css'
import Crypto from "./component/Crypto";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Coin from "./component/Coin";
function App() {
  return (
   <Router>
     <Route exact path="/" component={Crypto}></Route>
     <Coin/>
   </Router>
  );
}

export default App;
