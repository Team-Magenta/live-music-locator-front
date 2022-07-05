import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
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
                exact path="/component/Home"
                element={<Home/>}
              >
              </Route>
              <Route
                exact path="/component/Search"
                element={<Search/>}
              >
              </Route>
              <Route
                exact path="/component/OurTeam"
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
