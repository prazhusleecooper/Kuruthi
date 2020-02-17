import React from 'react';
import {Route, Switch} from "react-router-dom";
import './Resources/CSS/App.scss';
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import HeaderNav from "./Components/HeaderNav";

function App() {
  return (
      <div>
         <HeaderNav />
          <Switch>
              <Route path="/signin">
                  <Signin />
              </Route>
              <Route path="/signup">
                  <Signup />
              </Route>
          </Switch>
      </div>
  );
}

export default App;
