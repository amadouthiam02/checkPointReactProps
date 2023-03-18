import './App.css';
import { Profile } from './profile/Profile';
const handleName=(n)=>{alert(n)}

function App() {
  return (
    <div className="App">

      <Profile nom="Amadou Thiam" profession="Ingénieur-conseil" 
      age="52ans" onProfileClick={handleName}>

        \images\maphoto.jpg
      
      </Profile>
    </div>
  );
}

export default App;
