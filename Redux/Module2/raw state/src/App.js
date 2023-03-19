
import { createContext, useState } from 'react';
import './App.css';
import Parent from './Pages/Parent';
export const ContextProv = createContext();

function App() {
  const [ num, setNum ] = useState(0)
  const value={num,setNum}
  return (
    <ContextProv.Provider value={value}>

    <div className="">
      <Parent></Parent>
    </div>
    </ContextProv.Provider>
  );
}

export default App;
