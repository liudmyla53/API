import { Route, Routes } from 'react-router'
import './App.css'

import HomePage from './page/Home/HomePage'
import AboutPage from './page/About/AboutPage'

import NavBar from './ui/Navbar/NavBar'
import DestinationPageRequester from './page/Destination/DestinationPage'
import DestinationDetailPage from './page/Destination/DestinationDetailPage'




function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route>
          <Route index element= {<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='destination' element={<DestinationPageRequester />}/>
          {}
           <Route path="destination/:id" element={<DestinationDetailPage/>} />        
          </Route>
      </Routes>
    </>
  )
}

export default App
