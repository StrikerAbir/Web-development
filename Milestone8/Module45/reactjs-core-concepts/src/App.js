import logo from './logo.svg';
import './App.css';

const number = 555;
const singer= {name:'dr bane',job:'singer'}
const singer2 = { name: 'yo yo bane', job: 'singer' }
const singerStyle = {
  color: 'purple',
  backgroundColor:'white',
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>JSX</h1>
        <div className="container">
          <h3>hello dude. I am in react now.</h3>
        </div>

        <div className="music">
          <p>No.: {number+2}</p>
          <p style={singerStyle}>Name: {singer.name}, { singer.job }</p>
          <p style={{
            color: 'blue',
            backgroundColor: 'yellow',
          }}>Name: {singer2.name}, { singer2.job }</p>
        </div>   
      </header> */}
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h3>New component</h3>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    //way 1
    <div className='person'>
      <h1>Sakib al Hasan</h1>
      <p>profession: cricketer</p>
    </div>

    //way 2
    // <>
    //   <h1>Sakib al Hasan</h1>
    //   <p>profession: cricketer</p>
    // </>
  )
}

function Friend() {
  return (
    <div className='container'>
      <h3>Name: Banerangne pungaranga</h3>
      <p>Job: Kisu parena.</p>
    </div>
  )
}

export default App;
