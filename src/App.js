import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoutingPage from './Pages/RoutingPage';
import Home from './Pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RoutingPage />, children: [
        { path: '/', element: <Home /> },
        { path: '*', element: <div>No page</div> },
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
