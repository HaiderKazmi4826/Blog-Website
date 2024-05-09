import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx';
import Categories from './pages/Categories.tsx';
import Reviews from './pages/Reviews.tsx';
import News from './pages/News.tsx';
import Membership from './pages/Membership.tsx';
import Contact from './pages/Contact.tsx';
import SignIn from './pages/SignIn.tsx';
import SignUp from './pages/SignUp.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='categories' element={<Categories />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='news' element={<News />} />
      <Route path='membership' element={<Membership />} />
      <Route path='contact' element={<Contact />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
