import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Blog } from './blog/blog';
import { Login } from './login/login';
import { Post } from './post/post';
import { Resume } from './resume/resume';
import { Subscribe } from './subscribe/subscribe';


export default function App() {
  return (
    <BrowserRouter>
      <body>
        <header>
          <div className="left-column">
            <h1>Luke :D Richards<sup>&reg;</sup></h1>
            <nav>
              <ul>
                <li><NavLink className='nav-link' to='about'>About</NavLink></li>
                <li><NavLink className='nav-link' to='blog'>Blog</NavLink></li>
                <li><NavLink className='nav-link' to='login'>Login</NavLink></li>
                <li><NavLink className='nav-link' to='resume'>Resume</NavLink></li>
                <li><NavLink className='nav-link' to='subscribe'>Subscribe</NavLink></li>
              </ul>
            </nav>
          </div>

          <div className="right-column">
            <div className="weather-emoji">
              <img width="120px" src="partial-clouds.jpg" alt="random" />
            </div>
          </div>
        </header>

        <Routes>
          <Route path='/about' element={<About />} exact />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/post' element={<Post />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/subscribe' element={<Subscribe />} />

          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <a href="https://github.com/noah08642/startup">GitHub</a>
        </footer>

      </body>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}



