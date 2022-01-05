import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPosts from './pages/AddPosts/AddPosts';
import AllPosts from './pages/AllPosts/AllPosts';


import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './actions/posts';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import DashBoard from './pages/DashBoard/DashBoard';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';


function App() {
  // set state for blog id
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/about">
            <About />
          </Route>
          <Route  path="/add-blog">
            <AddPosts currentId={currentId}></AddPosts>
          </Route>
          <Route  path="/all-blogs">
            <AllPosts setCurrentId={setCurrentId}></AllPosts>
          </Route>
          <Route path="/dashboard">
            <DashBoard setCurrentId={setCurrentId} />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route  path="*">
            <NotFound />
          </Route>
          
        </Switch>
        <Footer />
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
