import {Provider} from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from "./redux/redux-store";
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
          <Switch >
              <Route exact path='/' render={() => <HeaderContainer />}/>
          </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
