import React from 'react';
import {
  FiLinkedin,
} from "react-icons/fi";
import '../styles/footer.css';

const iconList = [
  
  {
    id: 1,
    icon: <FiLinkedin />,
    url: "",
    text: "Adassa Coimin"
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/dyniem",
    text: "Dynie Mesoneuvre"
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/muning-chen-003760217/",
    text: "Muning Chen"
  }
   
  
];
class Footer extends React.Component {
  render() {
    return (
      <div>
        {iconList.map((item, idx) => {
          return (
            <div className = "left-align">
              <p>{item.icon} {item.text}  </p>
            </div>
            );
        })}
      </div>
      
      
    );
  }
}

export default Footer;

