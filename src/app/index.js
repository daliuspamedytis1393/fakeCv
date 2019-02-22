import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import './index.scss';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="Header">
        <h1>Dalius Pamedytis</h1>
        <hr />
        <p className="Header--contact">Phone : +37062699740</p>
        <p className="Header--contact">
          Email :{' '}
          <a
            href="mailto:daliuspamedytis1393@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            daliuspamedytis1393@gmail.com
          </a>
        </p>
        <p className="Header--summary">
          Jelly beans apple pie apple pie pudding pudding croissant. Caramels
          ice cream pudding ice cream cake cupcake. Caramels cupcake chupa
          chups. Jelly-o jujubes jelly caramels. Apple pie biscuit liquorice
          carrot cake halvah dragée sugar plum jujubes dragée. Donut icing
        </p>
        <div className="outer-div">
        <img
          className="Header--profile-picture"
          alt=""
          src="https://i.pinimg.com/originals/6c/12/14/6c1214c00d193b60efef65fe16ddf9a6.jpg"
        />
        </div>
      </header>
      <main>
        <section className="Section">
          <div className="Section--left" >
            <h3>Education</h3>
          </div>
          <div className="Section--right" >
            <h3>Gargždų universitetas</h3>
            <p><span>Major :</span> Apple pie biscuit liquorice </p>
            <p><span>Mindor :</span> Apple pie biscuit liquorice </p>
          </div>
        </section>
        <section className="Section">
          <div className="Section--left" >
            <h3>Skills</h3>
          </div>
          <div className="Section--right" >
            <div>
              <h3>Office skills</h3>
              <p> Apple pie biscuit liquorice Apple pie biscuit liquorice  </p>
            </div>
            <div>
              <h3>Computer skills</h3>
              <p>Apple pie biscuit liquorice Apple pie biscuit liquorice </p>
            </div>
          </div>
        </section><section className="Section">
          <div className="Section--left" >
            <h3>Experience</h3>
          </div>
          <div className="Section--right" >
          <div>
            <div className="Section--right-job-title">
              <h3>Code academy </h3>
              <span>very bad student 24/09/2018</span>
            </div>
            <ul>
              <li>Html</li>
              <li>Bbl</li>
              <li>Js</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <div className="Section--right-job-title">
              <h3>Kitties academy </h3>
              <span>very crazy student 24/09/2018</span>
            </div>
            <ul>
              <li>Html</li>
              <li>Bbl</li>
              <li>Js</li>
              <li>React</li>
            </ul>
          </div>
          </div>
        </section>
        <section className="Section">
          <div className="Section--left" >
            <h3>Hobbies</h3>
          </div>
          <div className="Section--right" >
            <p> I like to do flips </p>

          </div>
        </section>
        <section className="Section">
          <div className="Section--left" >
            <h3>Refereces</h3>
          </div>
          <div className="Section--right" >
            <p> I need money 1000 Eur </p>

          </div>
        </section>

      </main>

    </div>
    <footer className='Footer'>
      <a href='http://www.github.com/daliuspamedytis1393' target='_blank' rel='noopener noreferrer'><FaGithubSquare/></a>
      <a href='http://www.facebook.com/daliuspamedytis' target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>


    </footer>
    </React.Fragment>
  );
}

export default App;
