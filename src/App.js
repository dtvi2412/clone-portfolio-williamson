import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { DefaultLayout } from './layouts';
import { routes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<DefaultLayout>{route.component}</DefaultLayout>}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
