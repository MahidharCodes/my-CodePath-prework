import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
        <Route path="/creator/edit/:id" element={<EditCreator />} />
        <Route path="/creator/add" element={<AddCreator />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
