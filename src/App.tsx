import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Chat from './pages/Chat';
import { createASC } from './client/ascClient';

const channelId = "simple-chat-demo";

function App() {
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    createASC()
  }, [])
  return (
    <div>
      {connected ? <Chat channelId={channelId}/> : <Login setConnected={setConnected}/>}
    </div>
  );
}

export default App;
