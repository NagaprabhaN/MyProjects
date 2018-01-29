import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import listPoke from './listPoke';

import { Router, Route } from 'react-router';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

/*ReactDOM.render((<App />
	<ApolloProvider client={client}>
	<Router history={browserHistory}>
      <Route path='/' component={listPoke} />
       </Router>
     </ApolloProvider>), document.getElementById('root'));
registerServiceWorker();
*/

const networkInterface = createNetworkInterface({
  uri: 'https://graphql-pokemon.now.sh/'
})
const client = new ApolloClient({
  networkInterface
})


function render(Component) {
  ReactDOM.render(
    (
      <ApolloProvider client={client}>   
      <Router>
      <Route path='/' component={listPoke} />
       </Router>     
        <App />        
      </ApolloProvider>
    ),
    document.getElementById('root')
  );
}

render(App);
registerServiceWorker();