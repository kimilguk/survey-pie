import { Route, Routes } from 'react-router-dom';

import BuilderPage from './admin/pages/BuilderPage';
import ListPage from './admin/pages/ListPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/builder/:surveyId" element={<BuilderPage />} />
      </Routes>
    </div>
  );
}

export default App;
