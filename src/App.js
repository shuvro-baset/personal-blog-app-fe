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


function App() {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
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
          
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
