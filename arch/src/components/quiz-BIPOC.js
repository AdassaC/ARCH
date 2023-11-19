import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import '../styles/quiz_BIPOC.css'; // Import the CSS file

class QuizTemplatePage extends React.Component {
  state = {
    linkedinLinks: [
      { id: 1, name: 'Muning Chen', link: 'https://www.linkedin.com/in/muning-chen-003760217/' },
      { id: 2, name: 'Adassa Coimin', link: 'https://www.linkedin.com/in/adassa-coimin/' },
      { id: 3, name: 'Dynie Mesoneuvre', link: 'https://www.linkedin.com/in/dyniem/' },
    ],
  };
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
          <Link to = 'https://docs.google.com/forms/d/e/1FAIpQLSdKpgzYsMpnx5lJyygrgfS9S0yl13XBnXc-3_Fv3jRQ4IeFtQ/viewform?usp=sf_link'>
            <button className="quiz-button">Take the Quiz</button>
          </Link>
        </div>
        <div className="other-quizzes-container">
          <Link to = '/quiz_disability'>
            <button>Take the Disability Awareness Quiz</button>
          </Link>
          <Link to = '/quiz_lgbtq+'>
            <button>Take the LGBTQ+ Quiz</button>
          </Link>
        </div>
        <div className="contact-us-container">
        <h2>Contact Us!</h2>
        <p>Connect with us on LinkedIn:</p>

        <ul className="linkedin-list">
          {this.state.linkedinLinks.map((person) => (
            <li key={person.id}>
              <a href={person.link} target="_blank" rel="noopener noreferrer">
                {person.name}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
      </div>
      
    );
  }
}

export default QuizTemplatePage;
