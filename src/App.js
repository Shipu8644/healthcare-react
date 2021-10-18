
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/pages/Shared/Header/Header'
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login/Login';
import Registration from './pages/Registration/Registration';
import Details from './pages/Details/Details';
import AuthProvider from './pages/context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <PrivateRoute path='/detail/:id'>
              <Details></Details>
            </PrivateRoute>
            <Route to='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}





export default App;
