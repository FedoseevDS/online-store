import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/common/header/header';

import { Main } from './pages/main/main';
import styles from './styles/app.module.scss';
import './styles/global.scss';

function App() {

  return (
    <BrowserRouter>
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
