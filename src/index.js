import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux Promise
import ReduxPromise from 'redux-promise';

// Reducers
import reducers from './reducers';

// Semantic
import 'semantic-ui-css/semantic.min.css';

// Styles
import './stylesheet/stylesheet.css';

// Components
import App from './components/App';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const root = (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={App} />
                    
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
)
    


ReactDOM.render(root,document.getElementById('root'));
registerServiceWorker();
