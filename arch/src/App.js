import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BiasCheckerPage from './components/check_your_bias';
import QuizLGBTQ from './components/quiz_lgbtq';
import QuizBIPOC from './components/quiz-BIPOC';
import QuizDisability from './components/quiz_disability';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/checkYourBias" element={<BiasCheckerPage />} />
          <Route path="/quiz_lgbtq+" element={<QuizLGBTQ />} />
          <Route path="/quiz_disability" element={<QuizDisability />} />
          <Route path="/quiz_BIPOC" element={<QuizBIPOC />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

export default App;