import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from 'components/Header'
import Landing from 'components/Landing'
import Footer from 'components/Footer'
import Welcome from 'components/Welcome'
import Login from 'components/Login'
import Signup from 'components/Signup'
import ErrorPage from 'components/ErrorPage'
import 'styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
