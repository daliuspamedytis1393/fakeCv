import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Dalius Pamedytis</h1>
        <hr />
        <p className='Header--contact'>
          Phone : +37062699740
        </p>
        <p className='Header--contact'>
          Email : <a href='mailto:daliuspamedytis1393@gmail.com' target='_blank' rel='noopener noreferrer'>daliuspamedytis1393@gmail.com</a>
        </p>
        <p className='Header--summary'>
          Jelly beans apple pie apple pie pudding pudding croissant. Caramels
          ice cream pudding ice cream cake cupcake. Caramels cupcake chupa
          chups. Jelly-o jujubes jelly caramels. Apple pie biscuit liquorice
          carrot cake halvah dragée sugar plum jujubes dragée. Donut icing
          
        </p>
        <img
          className="Header--profile-picture"
          alt=""
          src="https://i.pinimg.com/originals/6c/12/14/6c1214c00d193b60efef65fe16ddf9a6.jpg"
        />
      </header>
    </div>
  );
}

export default App;
