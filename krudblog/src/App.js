import {app, firestore, auth} from './firebase/firebase';
import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from './chatComponents/NavBar';
import ChatBox from './chatComponents/ChatBox'; 
import Welcome from './chatComponents/Welcome';
import {useState} from "react";


function App() {
  const [user, setUser] = useState(null);

  const handleUserSignIn = (user) => {
    setUser(user);
  };

  return (
    <main className='chat-box'>
    <div className="Chat">
    <NavBar />
    {user === null ? <Welcome onSignIn={handleUserSignIn} /> : <ChatBox />}
  </div>
  </main>
  );
}

export default App;
