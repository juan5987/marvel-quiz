import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from 'components/Header';
import Landing from 'components/Landing';
import Footer from 'components/Footer';
import Welcome from 'components/Welcome';
import Login from 'components/Login';
import Signup from 'components/Signup';
import ErrorPage from 'components/ErrorPage';
import ForgetPassword from 'components/ForgetPassword';
import 'styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgetpassword" component={ForgetPassword}/>
          <Route exact path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
