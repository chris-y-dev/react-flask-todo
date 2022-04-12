import logo from './logo.svg';
import './App.css';
import TodoPage from './Pages/TodoPages';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Show from './Pages/Show';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/*' element= {<TodoPage />} />
      <Route path='/:id' element={<Show />} /> 
      </Routes>
    </div>
  );
}

export default App;
