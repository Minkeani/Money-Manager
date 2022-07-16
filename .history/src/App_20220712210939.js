import './App.css';
import Header from './components/Header/Header';
import RoutesConfig from './routes/RoutesConfig';
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header/>
            <Routes>
              {RoutesConfig.map((route, index) => (
                <Route 
                  key={index}
                  exact={route.exact}
                  element={<route.element/>}  
                  path={route.path}
                />
              ))}
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
