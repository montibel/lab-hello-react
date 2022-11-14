// src/App.js
import './App.css';
import ironlogo from './images/ironhack-logo-xs.png';
import menutop from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div class="supercontainer">
    <div className="App">
    
     <div class="ironlogo"> <img src={ironlogo} alt="ironlogo" /> </div>
     <div class='ironmenu'> <img src={menutop} alt="menutop"  /> </div>
      
      

    <div class="text">
      <h1>Say hello to <br></br>
      ReactJS</h1>
      <p>You will learn how to use the most popular frontend library and become a super Ninja developer. </p>
      <button>Awesome!</button>
    </div>
    </div>



    <div class="icons">
    <div class='icon1'>
        <div className='declarative'>
          <img src={icon1} alt="icon1" className='icon'/>
          <h2>Declarative</h2>
          <p>React makes it painless to reate interactive UIs.</p>
        </div>
     </div>
     <div class='icon2'>
        <div className="components">
          <img src={icon2} alt="icon2" className='icon'/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
     </div>
     <div class='icon3'>
        <div className='single way'>
          <img src={icon3} alt="icon2" className='icon'/>
          <h2>Single way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
     </div>
     <div class='icon4'>
        <div className='JSX'>
          <img src={icon4} alt="icon4" className='icon'/>
          <h2>JSX</h2>
          <p>Statically-typed. designed to run on modern browsers.</p>
        </div>
     </div>
     </div>
    </div>
  );
}
export default App;

