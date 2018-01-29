import React, { Component } from 'react';
import 'tachyons';
import './index.css';

/*import listPoke from './listPoke';
import {BrowserRouter} from 'react-router-dom';
import { Router, Route, browserHistory } from 'react-router';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://graphql-pokemon.now.sh/'
})
const client = new ApolloClient({
  networkInterface
}) */

class App extends Component {
  render() {
  return (
        <div className="App">
        <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, and save to reload.
        </p>

        </div>
        
     );

    }   
  }

export default App;
