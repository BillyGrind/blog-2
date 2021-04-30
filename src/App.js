import Navbar from './Components/Navbar/Navbar'
import Home from './Container/Home/Home'
import Ecrire from './Container/AddArticles/AddArticles'
import Contact from './Container/Contact/Contact'
import Article from './Container/Article/Article'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/ecrire" exact component={Ecrire}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/article" exact component={Article}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
