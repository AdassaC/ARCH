import React from 'react';
import Navbar from './navbar';
import '../styles/quiz_disability.css'; // Import the CSS file

class QuizTemplatePage extends React.Component {
  render() {
    return (
      <div>
         <Navbar /> {/* Include the Navbar component here */}
          <div className="disability-quiz">
            <h2 className="quiz-title">Test Your Knowledge on Disability Inclusivity!</h2>
            <p className="quiz-description">
            Welcome to our Disability Quiz! We're here to enlighten 
            and entertain you on the topic of disabilities. The world 
            is beautifully diverse, and that includes the wide range 
            of abilities people possess. This quiz is designed to 
            explore the incredible strengths and unique experiences 
            of individuals with disabilities. Let's break down stereotypes, 
            celebrate diversity, and have a great time while we're at it. 
            Whether you're an advocate, have a disability, or just want 
            to learn more, this quiz is your chance to shine a spotlight 
            on the power of diversity and inclusion!
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
