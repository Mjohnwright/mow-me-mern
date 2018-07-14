import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

//Pages
import Home from './pages/Home/Home'
// import About from './pages/AboutUs/AboutUs'
import AddJob from './pages/AddJob/AddJob'
import Jobs from './pages/Jobs/Jobs'
import Map from './pages/Map/Map'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import NoMatch from './pages/NoMatch/NoMatch'



import API from "./utils/API"

import axios from 'axios'

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }

//   componentDidMount(){
//     axios.get('/auth/authtest/user').then(response => {
// 			console.log(response.data)
// 			if (!!response.data.user) {
//         console.log('THERE IS A USER')
//         console.log(response.data.user._id);
//         API.getBand(response.data.user._id)
//           .then( res => {
//             this.setState({
//               loggedIn: true,
//               user: res.data.username
//             })
//           });
//         // console.log(currentUser);

// 			} else {
// 				this.setState({
// 					loggedIn: false,
// 					user: null
// 				})
// 			}
// 		})
//   }

//   _logout() {
//     // event.preventDefault();
//     this.setState({
//       loggedIn:false,
//       user:null
//     })
// 		console.log('logging out')
// 	}

// 	_login() {
//     this.setState({
//       loggedIn:true,
//     })
//     console.log("the current user that is logged in  is: " + this.state.user);
// 	};

	render() {
		return (
      <Router>
        
          <Nav _logout={this._logout} _login={this._login} currentUser = {this.state.user} loggedIn={this.state.loggedIn} />
          
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/map" component={Map} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
			<Route exact path="/jobboard" component={JobBoard} />
            <Route exact path="/api/jobs/:id" component={CreateJobs} />
            <Route component="/nomatch" component= {NoMatch} />
          
        
      </Router>
      );
    }
}

export default App;
