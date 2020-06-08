import React, {Component, lazy, Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from './components';
import { connect } from 'react-redux';
import { fetchFavoris } from './store/actions';

const LazyFilms = lazy(() => import(/* webpackChunkName: 'films' */'./features/films'));

const LazyFavoris = lazy(() => import(/* webpackChunkName: 'favoris' */'./features/favoris'));

class App extends Component {
  
  componentDidMount() {
    this.props.fetchFavoris();
  }
  
  render() {
    return (
        <div className="App d-flex flex-column">
          <Header />
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Switch>
              <Route path="/films" component={ LazyFilms } />
              <Route path="/favoris" component={ LazyFavoris }/>
              <Redirect to="/films" />
            </Switch>
          </Suspense>
        </div>
    );
  }
}

export default connect(null, {
  fetchFavoris
})(App);