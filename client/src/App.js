import './App.css';
import './normalize.css';
import SideBar from './components/SideBar/SideBar';
import ChatBox from './components/ChatBox/ChatBox';

function App() {
  return (
    <div className="App">
      <SideBar />
      <ChatBox />
    </div>
  );
}

export default App;
