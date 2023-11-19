import React from 'react';
import Navbar from './navbar';
import '../styles/quiz_lgbtq.css'; // Import the CSS file
import { Link } from 'react-router-dom';

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
          <Link to = 'https://docs.google.com/forms/d/e/1FAIpQLSc0OUqsSKiIWvaZOqrkxRcunFqMM-oVmbPLpARv83Iqp-kGdw/viewform?usp=sf_link'>
            <button className="quiz-button">Take the Quiz</button>
          </Link>
          
        </div>
        <div className="other-quizzes-container">
          <Link to = '/quiz_bipoc'>
            <button>Take the BIPOC Quiz</button>
          </Link>
          <Link to = '/quiz_disability'>
            <button>Take the Disability Awareness Quiz</button>
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
