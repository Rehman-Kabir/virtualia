import React, { useState } from 'react';
import plus from '../../assets/plus.png';
import './faq.css'
const FAQ = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div><img src={plus} alt="icon" className={isActive ? 'cross' : ''} /></div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default FAQ;