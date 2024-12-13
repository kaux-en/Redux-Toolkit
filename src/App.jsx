import { store } from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home'
import ViewExercises from './components/Exercises'
import './App.css'
import { Provider } from 'react-redux'
import NavigationBar from './components/NavBar'

function App() {
 

  return (
    <>
    <Provider store={store}>
      <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage /> } />
          <Route path='/Exercises' element={<ViewExercises /> } />
        </Routes>
      </Router>
      </div>
    </Provider>
      
    </>
  )
}

export default App
