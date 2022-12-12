import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/page/main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
