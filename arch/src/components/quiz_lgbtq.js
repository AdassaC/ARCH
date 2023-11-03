import React from 'react';
import Navbar from './navbar';
import '../styles/quiz_lgbtq.css'; // Import the CSS file

class QuizTemplatePage extends React.Component {
  render() {
    return (
      <div>
         <Navbar /> {/* Include the Navbar component here */}
          <div className="lgbtq-quiz">
            <h2 className="quiz-title">Test Your Knowledge on LGBTQ+ Inclusivity!</h2>
            <p className="quiz-description">
            Get ready to dive into the colorful and fabulous world of LGBTQ 
            with our LGBTQ Quiz! We promise it'll be as fun as a rainbow-filled 
            parade. The LGBTQ community is known for its vibrant spirit, 
            resilience, and a good dose of humor, and this quiz is here to 
            celebrate just that. So, whether you're a member of the LGBTQ 
            community, an enthusiastic ally, or simply curious, let's explore 
            the fabulousness together. Buckle up and prepare for a quiz that's 
            as sassy and fierce as your favorite drag queen!
            </p>
        <div className="button-container">
          <button className="quiz-button">Take the Quiz</button>
        </div>
      </div>
      </div>
      
    );
  }
}

export default QuizTemplatePage;
