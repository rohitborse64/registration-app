import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Registration/home-component';
import Registration from './Registration/registration-component';


const router = createBrowserRouter([
  {path: '/', element: <Home/> },
  {path: '/registration', element: <Registration/> },

]);

function App() {
  // return (
  //     <div className="container mt-5">
  //       <Home/>
  //     </div>
  // );
  return <RouterProvider router={router}/>
}

export default App;
