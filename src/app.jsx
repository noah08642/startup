import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Blog } from './blog/blog';
import { Login } from './login/login';
import { Post } from './post/post';
import { Resume } from './resume/resume';
import { Party } from './party/party';
import { UploadPost } from './uploadpost/uploadpost';
import { AuthState } from './login/authState';
import Subscribe from './subscribe/subscribe';
import WeatherIcon from './weather/weather';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [showPopup, setShowPopup] = useState(false);  // State for popup visibility
  const togglePopup = () => setShowPopup(!showPopup);  // Function to toggle popup
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <div className="left-column">
            <h1>Luke :D Richards<sup>&reg;</sup></h1>
            <nav>
              <ul>
                <li><NavLink className='nav-link' to='about'>About</NavLink></li>
                <li><NavLink className='nav-link' to='blog'>Blog</NavLink></li>
                <li><NavLink className='nav-link' to='login'>Login</NavLink></li>
                <li><NavLink className='nav-link' to='resume'>Resume</NavLink></li>
                <li>
                  <NavLink 
                    className='nav-link' 
                    onClick={(e) => {
                      e.preventDefault();  // Prevent navigation
                      togglePopup();        // Show popup
                    }}
                  >
                    Subscribe
                  </NavLink>
                </li>
                {authState === AuthState.Authenticated && (
                  <li><NavLink className='nav-link' to='party'> PARTYYYYY HAHAHAHA YOU LOGGED INTO MY WEBSITE </NavLink></li>
                )}
                {authState === AuthState.Authenticated && userName === 'lukerichards8' && (
                  <li><NavLink className='nav-link' to='uploadpost'> Upload Post </NavLink></li>
                )}
              </ul>
            </nav>
          </div>

          <div className="right-column">
            <ErrorBoundary>
              <WeatherIcon />
            </ErrorBoundary>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route
              path='/login'
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                  }}
                />
              }
              exact
            />
            <Route path='/party' element={<Party userName={userName} />} />
            <Route path='/uploadpost' element={<UploadPost userName={userName} />} />
            <Route path='/post/:postId' element={<Post />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        {showPopup && (
          <Subscribe 
            showPopup={showPopup}
            togglePopup={togglePopup}
          />
        )}

        <footer>
          <a href="https://github.com/noah08642/startup">GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}