import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import AuthProvider from './Hook/Authprovider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Shared/Header';
import About from './Pages/Home/About/About';
import Footer from './Shared/Footer';
import Notfound from './Pages/Notfound';
import Challenges from './Pages/Home/Challenges/Challenges';
import Addchallenges from './Pages/Home/Challenges/Addchallenges';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Booking from './Pages/Booking';
import Manage from './Pages/Manage';



function App() {
  return (
    <div className="App">
     <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path ="/home">
          <Home></Home>
        </Route>
        <Route exact path="/home#about">
        <About></About>
      </Route>
        <Route exact path="/home#challenges">
        <Challenges></Challenges>
      </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/addchallenge">
          <Addchallenges></Addchallenges>
        </Route>
        <Route exact path="/manage">
          <Manage></Manage>
        </Route>
        <PrivateRoute exact path="/booking/:cId">
      <Booking></Booking>
            </PrivateRoute>
        <Route exact path="*">
          <Notfound></Notfound>
        </Route>
        
      </Switch>
      <Footer></Footer>
    </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
