import {HashRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'

import logo from './logo.svg';
import './App.css';

import IndexRoute from './router'
import Frame from './common/component/Frame'

import http from './store/actions/http'
// import {loginAsync} from './store/actions'

function App(props) {

  return (
    <div className='App'>
      <Router>
        <IndexRoute />
      </Router>
    </div>
  );
}

export default connect(res=>res)(App);
