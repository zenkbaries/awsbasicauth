import logo from './logo.svg';
import './App.css';

import { Auth } from 'aws-amplify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <button onClick={() => Auth.signIn()}>Sign In</button> */}
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        <button onClick={Auth.checkUser}>Check User</button>
        <button onClick={Auth.signOut}>Sign Out</button>

      </header>
    </div>
  );
}

export default App;
