import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ROUTES from './routes/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              replace
              to="/films"
            />
          }
        />
        {ROUTES.map(route => {
          return (
            <Route
              key={route.name}
              {...route}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
