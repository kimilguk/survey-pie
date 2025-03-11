import { Route, Routes, useLocation } from 'react-router-dom';

import CompletionPage from './home/pages/CompletionPage';
import SurveyPage from './home/pages/SurveyPage';

import BuilderPage from './admin/pages/BuilderPage';
import ListPage from './admin/pages/ListPage';
import styled from 'styled-components';

function App() {
  const location = useLocation();
  if (location.pathname.includes('admin')) {
    return (
      <div className="App">
        <Routes>
          <Route path="/done/:surveyId" element={<CompletionPage />} />
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
          <Route path="/admin" element={<ListPage />} />
          <Route path="/admin/list" element={<ListPage />} />
          <Route path="/admin/builder" element={<BuilderPage />} />
          <Route path="/admin/builder/:surveyId" element={<BuilderPage />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <AppWrapper>
        <Box>
          <Routes>
            <Route path="/done/:surveyId" element={<CompletionPage />} />
            <Route path="/survey/:surveyId" element={<SurveyPage />}>
              <Route path=":step" element={<SurveyPage />} />
            </Route>
            <Route path="/admin" element={<ListPage />} />
            <Route path="/admin/list" element={<ListPage />} />
            <Route path="/admin/builder" element={<BuilderPage />} />
            <Route path="/admin/builder/:surveyId" element={<BuilderPage />} />
          </Routes>
        </Box>
      </AppWrapper>
    );
  }

}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

export default App;
