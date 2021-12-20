import React, { Route, Fragment } from "react";

import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";

function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate
  */
  return (
    <Fragment>
      <Route exact={true} path="/">
        <Header />
        <CardList />
      </Route>
      <Route path="/users/:userId">
        <User users={users}/>
      </Route>
    </Fragment>
  );
}

export default App;
