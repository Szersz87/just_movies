import React from 'react';
import HomePage from './components/homePage';
import Series from './components/series';
import Movies from './components/movies';
import NewAndPopular from './components/new&popular';
import MyList from './components/myList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const Menu = () => {
  return (
   <Router>
    <nav className='menu'>
      <Switch>
       < Route path="/" exact component={HomePage} />
       < Route path="/series" component={Series} />
       < Route path="/movies" component={Movies} />
       < Route path="/new&Popular" component={NewAndPopular} />
       < Route path="/myList" component={MyList} />
      </Switch>
    </nav>
    </Router>
  );
};


export default Menu;
