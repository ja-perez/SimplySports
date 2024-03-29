import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {About} from './pages/About/About'
import {Learn} from './pages/Learn/Learn'
import {Lounge} from './pages/Lounge/Lounge'
import { Dashboard } from './pages/Lounge/Dashboard/Dashboard';
import { Main } from './pages/Lounge/Main/Main';
import {SignIn} from './pages/Account/SignIn';
import SignUp from './pages/Account/SignUp';
import { ThemeProvider } from '@mui/material';
import { dashboardTheme } from './dashboardTheme';
import { Practice } from './pages/Learn/Practice';
import { Training } from './pages/Learn/Training';
import { Tutorial } from './pages/Learn/Tutorial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter basename='/team19/'>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<About />}></Route>
          <Route path="learn" element={<Learn />}></Route>
          <Route path="practice" element={<Practice />}></Route>
          <Route path="training" element={<Training />}></Route>
          <Route path="tutorial" element={<Tutorial />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="lounge" element={<Lounge/>}>
            <Route path="home" element={<Main />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
