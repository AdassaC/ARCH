import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import BiasCheckerPage from './components/check_your_bias';
import QuizLGBTQ from './components/quiz_lgbtq';
import QuizBIPOC from './components/quiz-BIPOC';
import QuizDisability from './components/quiz_disability';
import BIPOC from './components/bipoc';
<<<<<<< HEAD
import Disability from './components/disability'
=======
import Disability from './components/disability';
import LGBTQ from './components/lgbtq';
>>>>>>> bc3fc355c272238ea4d7d9c7ba9a6ff9945a59d5

function App() {
  return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/checkYourBias" element={<BiasCheckerPage />} />
					<Route path="/quiz_lgbtq+" element={<QuizLGBTQ />} />
					<Route path="/quiz_disability" element={<QuizDisability />} />
					<Route path="/quiz_BIPOC" element={<QuizBIPOC />} />
					<Route path="/bipoc" element={<BIPOC />} />
					<Route path="/disability" element={<Disability />} />
<<<<<<< HEAD
=======
					<Route path="/lgbtq" element={<LGBTQ />} />
>>>>>>> bc3fc355c272238ea4d7d9c7ba9a6ff9945a59d5
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;