import Popup from './Components/Popup';
import { useState } from 'react'

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <br/>
        <br/>
        <button onClick={()=> setButtonPopup(true)}>Open Popup</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>My Popup</h1>
          <p>This is my button triggered up</p>
      </Popup>
    </div>
  );
}

export default App;
