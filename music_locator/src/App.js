import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/MyEvents';
import OurTeam from './components/OurTeam';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
            <Routes>
              <Route
                exact path="/"
                element={<Home/>}
              >
              </Route>
              <Route
                exact path="/MyEvents"
                element={<Search/>}
              >
              </Route>
              <Route
                exact path="/OurTeam"
                element={<OurTeam/>}
              >
              </Route>
            </Routes>
            <Footer/>
        </Router>
      </>
    )
  }
  
}

export default App;
