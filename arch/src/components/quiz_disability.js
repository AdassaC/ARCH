import React from 'react';
import Navbar from './navbar';
import '../styles/quiz_disability.css'; // Import the CSS file
import '../styles/contactus.css'
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
          <Link to = 'https://docs.google.com/forms/d/e/1FAIpQLSfKoKAfoXERcHCYp2-z9eiji4XqJnQZpGYdnfxyWXZGoQlgcA/viewform?usp=sf_link'>
          <button className="quiz-button">Take the Quiz</button>
          </Link>
        </div>
        <div className="other-quizzes-container">
          <Link to = '/quiz_bipoc'>
            <button>Take the BIPOC Quiz</button>
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
