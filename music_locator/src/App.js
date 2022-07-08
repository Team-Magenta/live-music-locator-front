
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

// import './App.css';
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Search from './components/MyEvents';
// import OurTeam from './components/OurTeam';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom"

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <Router>
//           <Header />
//             <Routes>
//               <Route
//                 exact path="/"
//                 element={<Home/>}
//               >
//               </Route>
//               <Route
//                 exact path="/MyEvents"
//                 element={<Search/>}
//               >
//               </Route>
//               <Route
//                 exact path="/OurTeam"
//                 element={<OurTeam/>}
//               >
//               </Route>
//             </Routes>
//             <Footer/>
//         </Router>
//       </>
//     )
//   }
  
// }

// export default App;


import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MyEvents from './components/MyEvents';
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
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        <div className="body">
          <Router>
            <Header />
            <Routes>
              <Route
                exact path="/"
                element={<Home />}
              >
              </Route>
              <Route
                exact path="/MyEvents"
                element={<MyEvents/>}
              >
              </Route>
              <Route
                exact path="/OurTeam"
                element={<OurTeam />}
              >
              </Route>
            </Routes>
            <Footer />
          </Router>
        </div>
      </>

    )
  }

}


export default withAuth0(App);

