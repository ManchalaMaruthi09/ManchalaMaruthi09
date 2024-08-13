import React from 'react';
import{BrowserRouter as Router,Route,Redirect,Switch}from 'react-rouer-dom';
import Users from'./User/pages/Users';
import new place from'./places/pages/Newplace';
const App=()=>{
   return(
    <Router>
      <Switch>
        <Route path="/"exact>
          <Users/>
          <Route>
           <Routepath="/places/new"exact>
            <Newplace/>
       </Route>
          <Redirect to="/"/>
     </Switch>
    </Router>
   );
};
export default App;