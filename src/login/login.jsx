import React from 'react';
import "./login.css";

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

// export function Login({ userName, authState, onAuthChange }) {
//   return (
//     <main className='container-fluid bg-secondary text-center'>
//       <div>
//         {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
//         {authState === AuthState.Authenticated && (
//           <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
//         )}
//         {authState === AuthState.Unauthenticated && (
//           <Unauthenticated
//             userName={userName}
//             onLogin={(loginUserName) => {
//               onAuthChange(loginUserName, AuthState.Authenticated);
//             }}
//           />
//         )}
//       </div>
//     </main>
//   );
// }

export function Login({ userName, authState, onAuthChange }) {
    return (
    <main className="login-main">
      <div className="login-content">
        {authState !== AuthState.Unknown && <h1></h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}
