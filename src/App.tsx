// import LoginScreen from './Screens/Login'
import { Cards } from './Constants'
import { useState } from 'react'
import RoutesApp from './Services/routes'
import { CardsContext } from './Components/Context/CardContext'


function App() {
  const [cards, setCards] = useState<Cards>([])


  return (
  
    <CardsContext.Provider value={[cards, setCards]}>
      <RoutesApp />
    </CardsContext.Provider>

  )
  
}

export default App
