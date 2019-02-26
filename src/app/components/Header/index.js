import React from 'react';
import './index.scss';
import data from './data';
import PropTypes from 'prop-types';

function Header(props) {
  const { language, onLanguage } = props;
  const { contacts, picture, name, summary } = data[language];

  return (
    <header className="Header">
      <h1>{data.name}</h1>
      <hr />
      <p className="Header--contact">{`${contacts.phone.label} ${contacts.phone.value}`}</p>
      <p className="Header--contact">
        {`${contacts.email.label} `}
        <a
          href={`mailto:${contacts.email.value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
           {contacts.email.value}
        </a>
      </p>
      <p className="Header--summary">
        {summary}
      </p>
      <div className="outer-div">
      <img
        className="Header--profile-picture"
        alt={picture.alt}
        src={picture.src}
      />
      </div>
      <select  onChange={e => onLanguage(e.target.value)}className='Header--language-select'>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </header>
  );
}

Header.propTypes = {
  language: PropTypes.oneOf(['en', 'ru']),
  onLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {
    language: 'en',
};



export default Header;
