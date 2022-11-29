import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Provider } from "react-redux"
import store from './redux/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Crypto from "./components/Crypto"
import About from './components/About'
import Contact from './components/Contact'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <Provider store={store}>
			<BrowserRouter>
      <div className="App">
				<Navbar />
					<Switch>
						<Route exact path='/'>
							<Crypto />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Route path='/sign-up'>
							<SignUp />
						</Route>
						<Route path='/sign-in'>
							<SignIn />
						</Route>
					</Switch>
      </div>
			</BrowserRouter>
    </Provider>
  );
};

export default App;
