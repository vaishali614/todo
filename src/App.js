import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Businesspage from './pages/Businesspage';
import NewsPage from './pages/NewsPage';
import LiveShowPage from './pages/LiveShowPage';
import Homev from './pages/Homev'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/business' component={Businesspage}></Route>
        <Route  path='/news' component={NewsPage}></Route>
        <Route  path='/liveshow' component={LiveShowPage}></Route>
        <Route  path='/content/video' component={Homev}></Route>
        <Route  path='/content/article' component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
