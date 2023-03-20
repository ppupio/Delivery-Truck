import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";

import Cadastro from "../Pages/Cadastro";

import ListaDeFretesDisponiveis from "../Pages/ListaDeFretesDisponiveis";
import BuscaDeFrete from "../Pages/BuscaDeFrete";
import PaginaDeChat from "../Pages/PaginaDeChat";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
      
      
      <Route path="/listadefretes">
        <ListaDeFretesDisponiveis />
      </Route>
      <Route path="/buscadefretes">
        <BuscaDeFrete />
      </Route>
      
      <Route path="/chat">
        <PaginaDeChat />
      </Route>
    </Switch>
  );
};

export default Routes;