import 'styles/App.css'
import Header from 'components/Header'
import Landing from 'components/Landing'
import Footer from 'components/Footer'
import Welcome from 'components/Welcome'
import Login from 'components/Login'
import Signup from 'components/Signup'
import ErrorPage from 'components/ErrorPage'

function App() {
  return (
    <div className="App">
      <Header />

      <Welcome />
      <Landing />
      <Login />
      <Signup />
      <ErrorPage />
      
      <Footer />
    </div>
  );
}

export default App
