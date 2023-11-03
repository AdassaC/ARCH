import React from 'react';
import Navbar from './navbar';
import '../styles/quiz_BIPOC.css'; // Import the CSS file

class QuizTemplatePage extends React.Component {
  render() {
    return (
      <div>
         <Navbar /> {/* Include the Navbar component here */}
          <div className="BIPOC-quiz">
            <h2 className="quiz-title">Test Your Knowledge on BIPOC Inclusivity!</h2>
            <p className="quiz-description">
            Step into the fascinating world of BIPOC culture and history 
            with our BIPOC Quiz! The world is a tapestry of cultures and 
            backgrounds, and this quiz is all about celebrating the richness 
            of Black, Indigenous, and People of Color communities. From the 
            achievements of prominent figures to the nuances of cultural 
            traditions, we'll explore it all. Whether you're a member of the BIPOC 
            community, an ally, or someone who simply appreciates the beauty of 
            cultural diversity, this quiz is your chance to learn, celebrate, 
            and show your support. Let's embrace the beauty of our differences 
            and find unity in diversity!
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
