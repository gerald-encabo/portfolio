import './GlobalStyle.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';

function App() {

  const PageNotFound = () => (
    <h1 className='container'>Error 404!</h1>
  )

  return (
    <div className="App">
      <Router>
          <ScrollToTop />
          <Navbar/>
          <Switch>
              <Route path='/portfolio' exact>
                  <Redirect to="/" />
              </Route>
              <Route path='/' exact component={ About } />
              <Route path='/resume' exact component={ Resume } />
              <Route path='/project' exact component={ Project }/>
              <Route path='/contact' exact component={ Contact } />
              <Route path='/*' exact component={ PageNotFound }/>
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
