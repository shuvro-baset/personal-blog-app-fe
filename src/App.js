import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPosts from './pages/AddPosts/AddPosts';
import AllPosts from './pages/AllPosts/AllPosts';


import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './actions/posts';


function App() {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          
          <Route  path="/add-posts">
            <AddPosts currentId={currentId}></AddPosts>
          </Route>
          <Route  path="/all-posts">
            <AllPosts setCurrentId={setCurrentId}></AllPosts>
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
