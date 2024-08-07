import Navbar from './componenets/Navbar/Navbar'
import Home from './componenets/Home/Home'
import Services from './componenets/Services/Services'
import Pricing from './componenets/Pricing/Pricing'
import Reviews from './componenets/Reviews/Reviews'
import Team from './componenets/Team/Team'
import Contact from './componenets/Contact/Contact'
import './App.css'

function App() {

  return (
    <div className='main'>
    <Navbar/>
    <Home/>
    <Services/>
    <Team/>
    <Pricing/>
    <Reviews/>
    <Contact/>
    
    </div>
  )
}

export default App
