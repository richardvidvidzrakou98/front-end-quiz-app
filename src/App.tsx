import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
//import QuizCompletePage from './pages/QuizCompletePage';
import QuizCompletePage from './pages/QuizCompletedPage';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:subject" element={<QuestionsPage />} />
        <Route path="/quiz-completed/:subject" element={<QuizCompletePage />} />
      </Routes>
    </Router>
  );
};

export default App;
