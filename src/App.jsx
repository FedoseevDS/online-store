import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/common/header/header'

import { Main } from './pages/main/main'
import './styles/global.scss'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
