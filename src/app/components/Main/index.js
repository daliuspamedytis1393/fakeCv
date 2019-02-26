import React from 'react';
import './index.scss';
import data from './data';
import PropTypes from 'prop-types';

function Main(props) {
  const { language } = props;
  const skills = data.skills[language];
  const education = data.education[language];
  const experience = data.experience[language];
  const hobbies = data.hobbies[language];
  const refereces = data.refereces[language];

  return (

    <main>
      <section className="Section">
        <div className="Section--left" >
          {education.label}
        </div>
        <div className="Section--right" >
          <h3>{education.school}</h3>
          <p><span>{`${education.major.label}`} :</span> {education.major.value} </p>
          <p><span>{`${education.minor.label}`}</span> {education.minor.value}  </p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left" >
          <h3>{skills.label}</h3>
        </div>
        <div className="Section--right" >
        {skills.list.map(({ label, value }, index) => (
          <div key={index}>
            <h3>{label}</h3>
            <p>{value}</p>
          </div>
        ))}
        </div>
      </section><section className="Section">
        <div className="Section--left" >
          <h3>{experience.label}</h3>
        </div>
        <div className="Section--right" >
          {experience.list.map(({title, subtitle, responsibilities}, index)=>(
            <div key={index}>
            <div className="Section--right-job-title">
              <h3>{title}</h3>
              <span>{subtitle}</span>
            </div>
            <ul>
            {responsibilities.map((value, i) => (
              <li key={i}>{value}</li>
            ))}
            </ul>
            </div>


          ))}

          <div>

        </div>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left" >
          <h3>{hobbies.label}</h3>
        </div>
        <div className="Section--right" >
          <p>{hobbies.value}</p>

        </div>
      </section>
      <section className="Section">
        <div className="Section--left" >
          <h3>{refereces.label}</h3>
        </div>
        <div className="Section--right" >
          <p>{refereces.value}</p>

        </div>
      </section>

    </main>
  );
}

Main.propTypes = {
  language: PropTypes.oneOf(['en', 'ru']),
};

Main.defaultProps = {
    language: 'en',
};


export default Main;
